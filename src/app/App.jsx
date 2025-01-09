import ToDoContainer from "../ToDo/ToDoContainer/ToDoContainer";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import ToDoHeader from "../ToDo/ToDoHeader/ToDoHeader";
import ToDoCounter from "../ToDo/ToDoCounter/ToDoCounter";
import Card from "../components/Card/Card";
import ToDoList from "../ToDo/ToDoList/ToDoList";
import ToDoItemList from "../ToDo/ToDoItemList/ToDoItemList";
import ToDoSearch from "../ToDo/ToDoSearch/ToDoSearch";
import ToDoLoading from "../ToDo/ToDoLoading/ToDoLoading";
import EmptyTodos from "../ToDo/EmptyTodos/EmptyTodos";
import CreateBtn from "../components/CreateBtn/CreateBtn";
import Modal from "../components/Modal/Modal";
import ToDoForm from "../ToDo/ToDoForm/ToDoForm";
import SuccessModal from "../components/SucessModal/SuccessModal";
import EmpyToDoSearchResult from  "../ToDo/EmpyToDoSearchResult/EmpyToDoSearchResult";
import ToDosError from "../ToDo/ToDosError/ToDosError";
import { useTodos } from "../hooks/useTodos";
import { ChangeAlert } from "../components/ChangeAlert/ChangeAlert";
import "./App.css";

function App() {
  const { states, stateUpdaters } = useTodos();

  const {
    completedTask,
    totalTask,
    taskList,
    loading,
    searchValue,
    searchedTasks,
    showModalCreate,
    formError,
    showSuccessMessage,
    error,
  } = states;

  const {
    handleCompletedTask,
    handleDeleteTask,
    setSearchValue,
    setShowModalCreate,
    handleCreateTask,
    handleCloseSuccessModal,
    sincronizeTask,
  } = stateUpdaters;
  
  return (
    <>
      <main>
        <Container>
          <Header />
          <ToDoContainer>
            {/* Header Card */}
            <ToDoHeader loading={loading}>
              <ToDoCounter
                completedTask={completedTask}
                totalTask={totalTask}
              />
              <ToDoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </ToDoHeader>
            {/* Card - task list*/}
            <Card>
              <ToDoList
                error={error}
                loading={loading}
                searchedTasks={searchedTasks}
                totalTask={totalTask}
                searchText={searchValue}
                onError={() => <ToDosError />}
                onLoading={() => <ToDoLoading />}
                onEmpyTodos={() => <EmptyTodos />}
                onEmptySearchResult={(searchText) => (
                  <EmpyToDoSearchResult searchText={searchText} />
                )}
              >
                {(task) => (
                  <ToDoItemList
                    key={task.id}
                    {...task}
                    onComplete={() => handleCompletedTask(task.id)}
                    onDelete={() => handleDeleteTask(task.id)}
                  />
                )}
              </ToDoList>
            </Card>
            <CreateBtn setShowModalCreate={setShowModalCreate} />
          </ToDoContainer>
        </Container>
      </main>
      {showSuccessMessage && (
        <SuccessModal handleCloseModal={handleCloseSuccessModal} />
      )}
      {showModalCreate && (
        <Modal>
          <ToDoForm
            setShowModalCreate={setShowModalCreate}
            handleCreateTask={handleCreateTask}
            formError={formError}
          />
        </Modal>
      )}

      <ChangeAlert sincronizeTask={sincronizeTask} />
    </>
  );
}

export default App;
