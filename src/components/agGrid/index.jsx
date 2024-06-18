import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";

const GridExample = () => {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Nissan", model: "Leaf", price: 31990, electric: true },
    { make: "Chevrolet", model: "Bolt", price: 36620, electric: true },
    { make: "BMW", model: "i3", price: 44900, electric: true },
    { make: "Honda", model: "Civic", price: 26750, electric: false },
    { make: "Hyundai", model: "Kona", price: 28250, electric: false },
    { make: "Audi", model: "e-tron", price: 65900, electric: true },
    { make: "Mercedes-Benz", model: "C-Class", price: 41900, electric: false },
    { make: "Volkswagen", model: "ID.4", price: 39995, electric: true },
    { make: "Kia", model: "Soul EV", price: 37500, electric: true },
    { make: "Porsche", model: "Taycan", price: 82900, electric: true },
    { make: "Jaguar", model: "I-PACE", price: 69995, electric: true },
    { make: "Lexus", model: "ES", price: 40925, electric: false },
    { make: "Mazda", model: "MX-30", price: 33645, electric: true },
    { make: "Volvo", model: "XC40 Recharge", price: 53990, electric: true },
    { make: "Subaru", model: "Outback", price: 30995, electric: false },
    { make: "Land Rover", model: "Range Rover", price: 92200, electric: false },
    { make: "Jeep", model: "Wrangler", price: 32875, electric: false },
    { make: "Chevrolet", model: "Silverado", price: 40400, electric: false },
    { make: "Ram", model: "1500", price: 35595, electric: false },
    { make: "GMC", model: "Hummer EV", price: 108700, electric: true },
    { make: "Tesla", model: "Model S", price: 89990, electric: true },
    { make: "Toyota", model: "Camry", price: 25845, electric: false },
    { make: "Ford", model: "Mustang Mach-E", price: 42895, electric: true },
    { make: "Honda", model: "Accord", price: 26120, electric: false },
    { make: "Hyundai", model: "Ioniq 5", price: 39950, electric: true },
    { make: "BMW", model: "X5", price: 61700, electric: false },
    { make: "Audi", model: "Q5", price: 43500, electric: false },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      editable: true,
      filter: true,
      floatingFilter: true,
    };
  });
  const [colDefs, setColDefs] = useState([
    {
      field: "make",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: { values: ["Tesla", "Ford", "Toyota"] },
    },
    { field: "model" },
    { field: "price", valueFormatter: (p) => "$ " + p.value.toLocaleString(),
      cellClassRules: {
        "green-cell" : p => p.value > 30000
      }
     },
    { field: "electric" },
  ]);

  return (
    <div className="flex items-center justify-center ">
      <div className="ag-theme-quartz h-[700px] w-[1200px]">
        <AgGridReact
          rowData={rowData}
          rowSelection={"multiple"}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20]}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

export default GridExample;
