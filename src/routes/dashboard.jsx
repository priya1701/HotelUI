// @material-ui/icons
//import Dashboard from "@material-ui/icons/Dashboard";
import AddBox from "@material-ui/icons/AddBox";

// core components/views
//import DashboardPage from "views/Dashboard/Dashboard.jsx";
import MyForm from "views/UserProfile/AddProduct.jsx";
import MyTable from "views/TableList/DataTable.jsx";

const dashboardRoutes = [
  {
    path: "/allcustomers",
    sidebarName: "View All Guest",
    navbarName: "",
    icon: "content_paste",
    component: MyTable
  },
  {
    path: "/add",
    sidebarName: "Add Guest",
    navbarName: "",
    icon: AddBox,
    component: MyForm
  },
  { redirect: true, path: "/", to: "/allcustomers", navbarName: "Redirect" }
];

export default dashboardRoutes;
