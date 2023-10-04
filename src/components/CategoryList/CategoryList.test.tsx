import { render, screen } from '@testing-library/react';
import { ColumnsType } from 'antd/es/table';
import { Category } from '../../types';
import CategoryList from '.';

const columns: ColumnsType<Category> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',        
    },
    {
        title: 'Name',
        dataIndex: 'title',
        key: 'title',        
    },
    {
        title: 'Status',
        dataIndex: 'is_active',
        key: 'is_active',
    }
];

describe('Test Category List Component', () => {
    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), // Deprecated
              removeListener: jest.fn(), // Deprecated
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
    })
    test('test header column', () => {
        render(<CategoryList columns={columns} data={[]}/>)

        columns.map((column) => {
            if(column.title) {
                const title = screen.getByText(column.title.toString());
                expect(title).toBeDefined()
            }
        })
    })
})