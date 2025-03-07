import { StorageLog } from './types';

const mockData: StorageLog[] = [
    {
        id: Date.now().toString(),
        inputData: 'Sample input data 1',
        outputData: [
            {
                symbol: 'AAPL',
                unrealizedTotal: 1000,
                realizedTotal: 500,
                total: 1500,
            },
            {
                symbol: 'GOOGL',
                unrealizedTotal: 1000,
                realizedTotal: 500,
                total: 1500,
            },
            {
                symbol: 'MSFT',
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
                symbol: 'AAPL',
                unrealizedTotal: 2000,
                realizedTotal: 1000,
                total: 3000,
            },
            {
                symbol: 'GOOGL',
                unrealizedTotal: 2000,
                realizedTotal: 1000,
                total: 3000,
            },
            {
                symbol: 'AMZN',
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
                symbol: 'MSFT',
                unrealizedTotal: 1500,
                realizedTotal: 750,
                total: 2250,
            },
            {
                symbol: 'AMZN',
                unrealizedTotal: 1500,
                realizedTotal: 750,
                total: 2250,
            },
            {
                symbol: 'TSLA',
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
                symbol: 'AMZN',
                unrealizedTotal: 2500,
                realizedTotal: 1250,
                total: 3750,
            },
            {
                symbol: 'TSLA',
                unrealizedTotal: 2500,
                realizedTotal: 1250,
                total: 3750,
            },
            {
                symbol: 'GOOGL',
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
                symbol: 'TSLA',
                unrealizedTotal: 3000,
                realizedTotal: 1500,
                total: 4500,
            },
            {
                symbol: 'AAPL',
                unrealizedTotal: 3000,
                realizedTotal: 1500,
                total: 4500,
            },
            {
                symbol: 'MSFT',
                unrealizedTotal: 3000,
                realizedTotal: 1500,
                total: 4500,
            },
        ],
    },
];

export default mockData;