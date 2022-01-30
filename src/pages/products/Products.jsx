import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, Nav, Table } from 'react-bootstrap';
import '../../assets/vendor/simple-datatables/style.css'
import DataTable from 'react-data-table-component';
import userData from '../../assets/datas/users'
import styled from 'styled-components';
const columns = [
    {
        name: '#',
        selector: row => row.id,
        sortable: true
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true
    },
    {
        name: 'Position',
        selector: row => row.position,
        sortable: true
    },
    {
        name: 'Age',
        selector: row => row.age,
        sortable: true
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true
    },
]

const TextField = styled.input`
height: 32px;
width: 200px;
border-radius: 3px;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
border-top-right-radius: 0;
border-bottom-right-radius: 0;
border: 1px solid #e5e5e5;
padding: 0 32px 0 16px;

&:hover {
    cursor: pointer;
}
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField
            id="search"
            type="text"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <button type="button" onClick={onClear}>
            X
        </button>
    </>
);
const Products = () => {

    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = userData.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);
    return (
        <div className='main'>
            <div className="pagetitle">
                <h1>Önümler</h1>
                <Nav>
                    <Breadcrumb>
                        <BreadcrumbItem href='/'>
                            Home
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            Products
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            View product
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Nav>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <Card>
                            <Card.Body>
                                <Card.Title><h5>Datatables</h5></Card.Title>
                                <DataTable
                                    title="Contact List"
                                    columns={columns}
                                    data={filteredItems}
                                    pagination
                                    paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                                    subHeader
                                    subHeaderComponent={subHeaderComponentMemo}
                                    persistTableHead
                                />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;