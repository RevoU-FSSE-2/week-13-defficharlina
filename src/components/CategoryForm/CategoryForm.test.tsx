import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import CategoryForm from '.'

describe('Category Form Test', () => {
    const mockProps = {
        onSubmit : jest.fn()
    }

    test('field category name render correctly', async () => {
        render(<CategoryForm onSubmit={mockProps.onSubmit}/>)
        const title = screen.getByText('Name')
        const form = screen.getByPlaceholderText('Please input the category')
        expect(title).toBeDefined();
        expect(form).toBeDefined();
    })

    test('field category status render correctly', async () => {
        render(<CategoryForm onSubmit={mockProps.onSubmit}/>)
        const title = screen.getByText('Status')
        //const form = screen.getByPlaceholderText('Select status')
        const status = screen.getByRole('combobox');
        expect(title).toBeDefined();
        //expect(form).toBeDefined();
        expect(status).toBeDefined();
    })

    test('button submit render correctly', async () => {
        render(<CategoryForm onSubmit={mockProps.onSubmit}/>)
        const title = screen.getByText('Submit')
        expect(title).toBeDefined();
    })

    test('onSubmit works correctly', async () => {
        render(<CategoryForm onSubmit={mockProps.onSubmit} />);
        const title = screen.getByPlaceholderText('Please input the category') as HTMLInputElement;
        //const status = screen.getByPlaceholderText('Select status') as HTMLInputElement;
        const status = screen.getByRole('combobox');
        const submitButton = screen.getByText('Submit');

        fireEvent.change(title, { target: { value: 'contoh' } });
        fireEvent.change(status, { target: { value: true } });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockProps.onSubmit).toHaveBeenCalledTimes(1);
            expect(mockProps.onSubmit).toHaveBeenCalledWith({
                title: 'contoh',
                is_active: true,
            });
        });
    })

})