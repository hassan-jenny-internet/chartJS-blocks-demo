// @ts-nocheck
export const dataResource = [
	{ template_name: 'core_demos' },
	{ template_name: 'core_demos' },
	{ template_name: 'core_demos' },
	{ template_name: 'prepare' },
	{ template_name: 'saleslead' },
	{ template_name: 'core_demos' },
	{ template_name: 'postman' },
	{ template_name: 'core_demos' },
	{ template_name: 'saleslead' },
	{ template_name: 'prepare' },
	{ template_name: 'postman' },
	{ template_name: 'pelican' },
	{ template_name: 'pelican' },
	{ template_name: 'postman' },
	{ template_name: 'pale' }
];

export const blockParams = [
	{
		charttype: 'bar',
		group_by: 'template_name',
		title: 'Template count by name',
		count_rows: true
	}
];

export const formatDataForChartJS = (dataResource, blockParams) => {
	if (!blockParams.count_rows) {
		return false;
	} else {
		const aggregation = dataResource.reduce((acc, curr) => {
			acc[curr[blockParams.group_by]] = acc[curr[blockParams.group_by]] || 0;
			acc[curr[blockParams.group_by]] += 1;
			return acc;
		}, {});

		return {
			type: blockParams.charttype,
			data: {
				labels: Object.keys(aggregation),
				datasets: [
					{
						label: blockParams.title,
						data: Object.values(aggregation)
					}
				]
			}
		};
	}
};

export const single_field_objects = (title) => {
	return formatDataForChartJS(
		dataResource,
		blockParams.find((b) => b.title === title)
	);
};
