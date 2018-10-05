// @material-ui/icons
//import Dashboard from "@material-ui/icons/Dashboard";
//import Add from "@material-ui/icons/Add";
import AddBox from "@material-ui/icons/AddBox";
import Train from "@material-ui/icons/Train"

// core components/views
//import DashboardPage from "views/Dashboard/Dashboard.jsx";
import MyForm from "views/UserProfile/AddProduct.jsx";
import AllShipments from "views/Shipment/ShipmentList.jsx";
//import UpdateForm from "views/UpdateData/UpdateDelete.jsx"
import MyTable from "views/TableList/DataTable.jsx";
import MyShipment from "views/Shipment/AddShipment.jsx"

const dashboardRoutes = [
  {
    path: "/allDrug",
    sidebarName: "View All Drug",
    navbarName: "",
    icon: "content_paste",
    component: MyTable
  },
  {
    path: "/add",
    sidebarName: "Add Drug",
    navbarName: "",
    icon: AddBox,
    component: MyForm
  },
  {
    path: "/viewshipment",
    sidebarName: "All Shipments",
    navbarName: "",
    icon: Train,
    component: AllShipments
  },
  {
    path: "/addshipment",
    sidebarName: "Add Shipment",
    navbarName: "",
    icon: AddBox,
    component: MyShipment
  },
  { redirect: true, path: "/", to: "/allDrug", navbarName: "Redirect" }
];

export default dashboardRoutes;
