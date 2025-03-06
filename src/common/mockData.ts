import { Report } from './types';

const mockData: Report[] = [
    {
        id: Date.now().toString(),
        inputData: 'Sample input data 1',
        outputData: [
            {
                symbolName: 'AAPL',
                unrealizedTotal: 1000,
                realizedTotal: 500,
                total: 1500,
            },
            {
                symbolName: 'GOOGL',
                unrealizedTotal: 1000,
                realizedTotal: 500,
                total: 1500,
            },
            {
                symbolName: 'MSFT',
                unrealizedTotal: 1000,
                realizedTotal: 500,
                total: 1500,
            },
        ],
    },
    {
        id: (Date.now() + 1).toString(),
        inputData: 'Sample input data 2',
        outputData: [
            {
                symbolName: 'AAPL',
                unrealizedTotal: 2000,
                realizedTotal: 1000,
                total: 3000,
            },
            {
                symbolName: 'GOOGL',
                unrealizedTotal: 2000,
                realizedTotal: 1000,
                total: 3000,
            },
            {
                symbolName: 'AMZN',
                unrealizedTotal: 2000,
                realizedTotal: 1000,
                total: 3000,
            },
        ],
    },
    {
        id: (Date.now() + 2).toString(),
        inputData: 'Sample input data 3',
        outputData: [
            {
                symbolName: 'MSFT',
                unrealizedTotal: 1500,
                realizedTotal: 750,
                total: 2250,
            },
            {
                symbolName: 'AMZN',
                unrealizedTotal: 1500,
                realizedTotal: 750,
                total: 2250,
            },
            {
                symbolName: 'TSLA',
                unrealizedTotal: 1500,
                realizedTotal: 750,
                total: 2250,
            },
        ],
    },
    {
        id: (Date.now() + 3).toString(),
        inputData: 'Sample input data 4',
        outputData: [
            {
                symbolName: 'AMZN',
                unrealizedTotal: 2500,
                realizedTotal: 1250,
                total: 3750,
            },
            {
                symbolName: 'TSLA',
                unrealizedTotal: 2500,
                realizedTotal: 1250,
                total: 3750,
            },
            {
                symbolName: 'GOOGL',
                unrealizedTotal: 2500,
                realizedTotal: 1250,
                total: 3750,
            },
        ],
    },
    {
        id: (Date.now() + 4).toString(),
        inputData: 'Sample input data 5',
        outputData: [
            {
                symbolName: 'TSLA',
                unrealizedTotal: 3000,
                realizedTotal: 1500,
                total: 4500,
            },
            {
                symbolName: 'AAPL',
                unrealizedTotal: 3000,
                realizedTotal: 1500,
                total: 4500,
            },
            {
                symbolName: 'MSFT',
                unrealizedTotal: 3000,
                realizedTotal: 1500,
                total: 4500,
            },
        ],
    },
];

export default mockData;