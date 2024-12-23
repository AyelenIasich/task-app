import ToDoContainer from "./ToDo/ToDoContainer/ToDoContainer";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import ToDoHeader from "./ToDo/ToDoHeader/ToDoHeader";
import ToDoCounter from "./ToDo/ToDoCounter/ToDoCounter";
import Card from "./components/Card/Card";
import ToDoList from "./ToDo/ToDoList/ToDoList";
import ToDoItemList from "./ToDo/ToDoItemList/ToDoItemList";
import ToDoSearch from "./ToDo/ToDoSearch/ToDoSearch";
import ToDoLoading from "./ToDo/ToDoLoading/ToDoLoading";
import EmptyTodos from "./ToDo/EmptyTodos/EmptyTodos";
import CreateBtn from "./components/CreateBtn/CreateBtn";
import Modal from "./components/Modal/Modal";
import ToDoForm from "./ToDo/ToDoForm/ToDoForm";
import SuccessModal from "./components/SucessModal/SuccessModal";
import ToDosError  from "./ToDo/ToDosError/ToDosError";
import { useTodos } from "./hooks/useTodos";
import "./App.css";

function App() {
  const {
    completedTask,
    totalTask,
    searchedTasks,
    loading,
    handleCompletedTask,
    handleDeleteTask,
    searchValue,
    setSearchValue,
    setShowModalCreate,
    showModalCreate,
    handleCreateTask,
    formError,
    showSuccessMessage,
    handleCloseSuccessModal,
    error,

  } = useTodos();

  return (
    <>
      <main>
        <Container>
          <Header />
          <ToDoContainer>
            {/* Header Card */}
            <ToDoHeader>
              <ToDoCounter
                completedTask={completedTask}
                totalTask={totalTask}
                loading={loading}
              />
              <ToDoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </ToDoHeader>
            {/* Card */}
            <Card>
              <ToDoList>
                {loading && (
                  <>
                    <ToDoLoading />
                    <ToDoLoading />
                    <ToDoLoading />
                  </>
                )}
              {error && <ToDosError />}

                {!loading && searchedTasks.length === 0 && <EmptyTodos />}
                {searchedTasks.map((task) => (
                  <ToDoItemList
                    key={task.id}
                    {...task}
                    onComplete={() => handleCompletedTask(task.id)}
                    onDelete={() => handleDeleteTask(task.id)}
                  />
                ))}
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
          <ToDoForm setShowModalCreate={setShowModalCreate} handleCreateTask={handleCreateTask} formError={formError}/>
        </Modal>
      )}
    </>
  );
}

export default App;
