import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import { ThemeContext } from './ThemeWrapper';
import {
  Parent,
  DashboardPage,
  BlankPage,
  Form,
  Table,
  Error,
  NotFound,
  AddProject,
  // BackOffice Path
  InsertProject,
  DisplayPreproject,
  PreprojectDetail,
  DocumentStatus,
  DocumentUpload,
  TransferProject,
  DisplayProject,
  ProjectDetail,
  ProjectDocumentStatus,
  // General Path
  SearchProject,
  ProjectDoc,
  PublicizeTeacher,
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        <Route exact path="/app" component={BlankPage} />
        <Route exact path="/app/blank-page" component={BlankPage} />
        <Route path="/app/pages/dashboard" component={DashboardPage} />
        <Route path="/app/pages/form" component={Form} />
        <Route path="/app/pages/table" component={Table} />
        <Route path="/app/pages/not-found" component={NotFound} />
        <Route path="/app/pages/error" component={Error} />
        <Route exact path="/app/pages" component={Parent} />
        <Route exact path="/app/pages/AddProject" component={AddProject} />
        {/* BackOffice Path */}
        <Route exact path="/app/BackOffice/InsertProject/InsertProject" component={InsertProject} />
        <Route exact path="/app/BackOffice/DisplayPreproject/DisplayPreproject" component={DisplayPreproject} />
        <Route exact path="/app/BackOffice/PreprojectDetail/PreprojectDetail" component={PreprojectDetail} />
        <Route exact path="/app/BackOffice/DocumentStatus/DocumentStatus" component={DocumentStatus} />
        <Route exact path="/app/BackOffice/DocumentStatus/DocumentUpload" component={DocumentUpload} />
        <Route exact path="/app/BackOffice/TransferProject/TransferProject" component={TransferProject} />
        <Route exact path="/app/BackOffice/DisplayProject/DisplayProject" component={DisplayProject} />
        <Route exact path="/app/BackOffice/ProjectDetail/ProjectDetail" component={ProjectDetail} />
        <Route exact path="/app/BackOffice/ProjectDocumentStatus/ProjectDocumentStatus" component={ProjectDocumentStatus} />
        {/* General Path */}
        <Route exact path="/app/General/SearchProject/SearchProject" component={SearchProject} />
        <Route exact path="/app/General/SearchProject/ProjectDoc" component={ProjectDoc} />
        <Route exact path="/app/General/PublicizeTeacher/PublicizeTeacher" component={PublicizeTeacher} />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
