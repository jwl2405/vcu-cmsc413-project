import React, {useState} from 'react';
import MaterialTable from "material-table";
import {
    container,
} from "./MainPageElements";

const MainPage = () => {
    const columns=[
        {title:"Website", field:"website", validate: rowData => rowData.name === '' ? 'Name cannot be empty' : ''},
        {title:"Email", field: "email", validate: rowData => rowData.email === '' ? 'Email address cannot be empty' : ''},
        {title:"Password", field:"password", validate: rowData => rowData.password === '' ? 'Password cannot be empty' : ''},
    ];

    const [tableData, setTableData] =useState([
        {website: "google", email: "tommyli874@gmail.com", password: "cannons032199"}
    ]);
    return (
        <>
            <container>
                <MaterialTable
                    title="Account Information"
                    columns={columns}
                    data={tableData}
                    actions={[
                        {
                            icon: 'save',
                            tooltip: 'Save User',
                            onClick: (event, rowData) => alert("You saved " + rowData.website)
                        }
                    ]}
                    options={{
                        actionsColumnIndex: 0,
                        filtering: true
                    }}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    setTableData([...tableData, newData]);

                                    resolve();
                                }, 1000)
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataUpdate = [...tableData];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    setTableData([...dataUpdate]);

                                    resolve();
                                }, 1000)
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataDelete = [...tableData];
                                    const index = oldData.tableData.id;
                                    dataDelete.splice(index, 1);
                                    setTableData([...dataDelete]);

                                    resolve()
                                }, 1000)
                            }),
                    }}
                />
            </container>
        </>
    );
}

export default MainPage;