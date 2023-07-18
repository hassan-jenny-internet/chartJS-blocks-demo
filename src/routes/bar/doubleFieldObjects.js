// @ts-nocheck
export const dataResourceDbl = [
	{
		amount_paid: 100,
		client_name: 'John'
	},
	{
		amount_paid: 200,
		client_name: 'John'
	},
	{
		amount_paid: 300,
		client_name: 'Mary'
	},
	{
		amount_paid: 250,
		client_name: 'Sue'
	},
	{
		amount_paid: 200,
		client_name: 'John'
	},
	{
		amount_paid: 115,
		client_name: 'Mary'
	}
];

export const blockParamsDbl = [
	{
		charttype: 'bar',
		group_by: 'client_name',
		count_rows: true,
		title: 'Number of times each client paid'
	},
	{
		charttype: 'bar',
		group_by: 'client_name',
		count_rows: false,
		title: 'Total amount paid by client',
		value_column: 'amount_paid'
	},
	{
		charttype: 'bar',
		group_by: 'client_name',
		count_rows: false,
		title: 'Biggest payment by client',
		value_column: 'amount_paid',
		aggregation_function: 'max'
	},
	{
		charttype: 'bar',
		group_by: 'client_name',
		count_rows: false,
		title: 'Smallest payment by client',
		value_column: 'amount_paid',
		aggregation_function: 'min'
	}
];

function formatDataForChartJS(dataResourceDbl, blockParamsDbl) {
	const aggregation = dataResourceDbl.reduce((acc, curr) => {
		// initialize the key
		let current_value = acc[curr[blockParamsDbl.group_by]];

		// aggregation_value
		let aggregation_value = blockParamsDbl?.count_rows ? 1 : curr[blockParamsDbl.value_column];

		// aggregation_function
		if (blockParamsDbl.aggregation_function === 'max') {
			current_value = Math.max(aggregation_value, current_value || -Infinity);
		} else if (blockParamsDbl.aggregation_function === 'min') {
			current_value = Math.min(aggregation_value, current_value || Infinity);
		} else {
			current_value = (current_value || 0) + aggregation_value;
		}

		acc[curr[blockParamsDbl.group_by]] = current_value;

		return acc;
	}, {});

	return {
		type: blockParamsDbl.charttype,
		data: {
			labels: Object.keys(aggregation),
			datasets: [
				{
					label: blockParamsDbl.title,
					data: Object.values(aggregation)
				}
			]
		}
	};
}

export const double_field_objects = (title) => {
	return formatDataForChartJS(
		dataResourceDbl,
		blockParamsDbl.find((b) => b.title === title)
	);
};
