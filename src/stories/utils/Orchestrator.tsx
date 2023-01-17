import React, { FC } from 'react';
import Waiting from './waiting';
const lunatic = require('@inseefr/lunatic')

interface OrchestratorProps {
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
}: {
	goPrevious: Function,
	goNext: Function,
	goToPage: Function,
	isLast: boolean,
	isFirst: boolean,
	pageTag: number,
	maxPage?: string,
	getData: Function,
}) {
	if (maxPage && parseInt(maxPage) > 1) {
		const Button = lunatic.Button;
		return (
			<>
				<div className="pagination">
					<Button onClick={goPrevious} disabled={isFirst}>
						Previous
					</Button>
					<Button onClick={goNext} disabled={isLast}>
						Next
					</Button>
					<Button onClick={() => console.log(getData(true))}>Get State</Button>
					<Button onClick={() => goToPage({ page: '18' })}>
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
			/>
			<lunatic.Modal errors={modalErrors} goNext={goNextPage} />
			<Waiting status={waiting}>
				<div className="waiting-orchestrator">
					Initialisation des données de suggestion...
				</div>
			</Waiting>
		</div>
	)
}

export default Orchestrator;