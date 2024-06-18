import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-enterprise";
import { useEffect, useMemo, useRef, useState } from "react";

const GridExample = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "athlete", },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      sortable: true,
      filter: true,
      enableRowGroup: true,
    };
  });
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);
  return (
    <div className="flex items-center justify-center ">
      <div className="ag-theme-quartz h-[850px] w-[1600px]">
        <AgGridReact
        rowGroupPanelShow="always"
          rowData={rowData}
          animateRows={true}
          rowSelection={"multiple"}
          // pagination={true}
          // paginationPageSize={10}
          // paginationPageSizeSelector={[10, 20]}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

export default GridExample;

//   {
//     field: "make",
//     cellEditor: "agSelectCellEditor",
//     cellEditorParams: { values: ["Tesla", "Ford", "Toyota"] },
//   },
//   { field: "model" },
//   { field: "price", valueFormatter: (p) => "$ " + p.value.toLocaleString(),
//     cellClassRules: {
//       "green-cell" : p => p.value > 30000
//     }
//    },
//   { field: "electric" },
// ]);
