import React, { FC } from 'react';
import Waiting from './waiting';
const lunatic = require('@inseefr/lunatic')

interface OrchestratorProps {
	id: string, 
	source: { maxPage?: string, components?: {}, variables?: {} },
	data: object,
	management?: boolean,
	activeControls?: boolean,
	features?: [],
	initialPage?: string,
	getStoreInfo?: Function,
	missing?: boolean,
	shortcut?: boolean,
	activeGoNextForMissing?: boolean,
	suggesterFetcher: Function,
	autoSuggesterLoading: boolean,
	suggesters: [],
	preferences: [],
	custom?: object,
	filterDescription: boolean,
}

function getStoreInfoRequired() {
	return {};
}

function Pager({
	goPrevious,
	goNext,
	goToPage,
	isLast,
	isFirst,
	pageTag,
	maxPage,
	getData,
	custom
}: {
	goPrevious: Function,
	goNext: Function,
	goToPage: Function,
	isLast: boolean,
	isFirst: boolean,
	pageTag: number,
	maxPage?: string,
	getData: Function,
	custom?: Object,
}) {
	if (maxPage && parseInt(maxPage) > 1) {
		const Button = lunatic.Button;
		return (
			<>
				<div className="pagination">
					<Button custom={custom} onClick={goPrevious} disabled={isFirst}>
						Previous
					</Button>
					<Button custom={custom} onClick={goNext} disabled={isLast}>
						Next
					</Button>
					<Button custom={custom} onClick={() => console.log(getData(true))}>Get State</Button>
					<Button custom={custom} onClick={() => goToPage({ page: '18' })}>
						Go to page 18
					</Button>
				</div>
				<div>PAGE: {pageTag}</div>
			</>
		);
	}
	return null;
}

function onLogChange(res: any, value: any, args: any) {
	console.log('onChange', { res, value, args });
}

const Orchestrator: FC<OrchestratorProps> = ({
	id,
	source,
	data,
	management = false,
	activeControls = false,
	features,
	initialPage = '1',
	getStoreInfo = getStoreInfoRequired,
	missing = false,
	shortcut = false,
	activeGoNextForMissing = false,
	suggesterFetcher,
	autoSuggesterLoading,
	suggesters,
	preferences,
	custom,
	filterDescription = true,
	...rest
}) => {
	const { maxPage } = source;
	const {
		getComponents,
		goPreviousPage,
		goNextPage,
		goToPage,
		pageTag,
		isFirstPage,
		isLastPage,
		waiting,
		getErrors,
		getModalErrors,
		getCurrentErrors,
		getData,
		Provider,
	} = lunatic.useLunatic(source, data, {
		initialPage,
		features,
		preferences,
		onChange: onLogChange,
		custom,
		activeGoNextForMissing,
		autoSuggesterLoading,
		suggesters,
		suggesterFetcher,
		management,
		activeControls,
	});

	const components = getComponents();
	const errors = getErrors();
	const modalErrors = getModalErrors();
	const currentErrors = getCurrentErrors();

	return (
		<Provider>
			<div className="container">
				<div className="components">
					{components.map(function (component: {
						id?: string, componentType: string, response?: string, storeName?: string
					}) {
						const { id, componentType, storeName, response, ...other } =
							component;
						
						const Component = lunatic[componentType];
						const storeInfo = storeName ? getStoreInfo(storeName) : {};
						return (
							<div className="lunatic lunatic-component-dsfr" key={`component-${id}`}>
								<Component
									id={id}
									response={response}
									{...other}
									{...rest}
									{...component}
									{...storeInfo}
									missing={missing}
									missingStrategy={goNextPage}
									shortcut={shortcut}
									filterDescription={filterDescription}
									errors={currentErrors}
								/>
							</div>
						);
					})}
				</div>
				<Pager
					goPrevious={goPreviousPage}
					goNext={goNextPage}
					goToPage={goToPage}
					isLast={isLastPage}
					isFirst={isFirstPage}
					pageTag={pageTag}
					maxPage={maxPage}
					getData={getData}
					custom={custom}
				/>
				<lunatic.Modal errors={modalErrors} goNext={goNextPage} />
				<Waiting status={waiting}>
					<div className="waiting-orchestrator">
						Initialisation des données de suggestion...
					</div>
				</Waiting>
			</div>
		</Provider>
	)
}

export default Orchestrator;