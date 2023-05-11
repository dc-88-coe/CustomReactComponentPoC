import {
   Streamlit,
   StreamlitComponentBase,
   withStreamlitConnection,
}  from "streamlit-component-lib"
import React, { ReactNode, useState, useEffect } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Card } from 'primereact/card';

import { ProductService } from './service/ProductService';

interface State {}
class PrimeReactComponent extends StreamlitComponentBase<State> {
    public state = {}


    public render = (): ReactNode => {

    return (
        <div className="card">
            <Card style={{ padding: '0 !important' }}>
            <DataTable
                value={ProductService.getProductsData()}
                sortMode="multiple"
                showGridlines
                size={'small'}
                tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column field="name" header="Name" sortable filter style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable filter style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
                </Card>
        </div>
    );
  }
}
export default withStreamlitConnection(PrimeReactComponent)