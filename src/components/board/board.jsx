import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../card/card';
import './board.css';

const Board = () => {

    //dummy task
    const [task, setTask] = useState([
        { id: "1", name: 'Saurav Arora', taskStatus: 'todo', profession: "Owner", company: "Origami", tags: ['HEIDENTIC', 'EVENTS'] },
        { id: "2", name: 'Bob', taskStatus: 'inprogress', profession: "Deliveryman", company: "BlackPenguin", tags: ['HEIDENTIC', 'EVENTS'] },
        { id: "3", name: 'Mary Jane', taskStatus: 'finalcheck', profession: "Owner", company: "HappyJS", tags: ['HEIDENTIC'] },
        { id: "4", name: 'Ritesh', taskStatus: 'done', tags: ['EVENTS'], profession: "Cook", company: "Origami" },
        { id: "5", name: 'John wick', taskStatus: 'done', profession: "Manager", company: "Google", tags: ['HEIDENTIC', 'EVENTS'] },
        { id: "6", name: 'James', taskStatus: 'todo', profession: "advertiser", company: "BlackPenguin", tags: ['HEIDENTIC'] },
        { id: "7", name: 'Praveen', taskStatus: 'todo', profession: "Director", company: "Origami", tags: ['EVENTS'] },
    ]);

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [profession, setProfession] = useState("");
    const [taskStatus, setTaskStatus] = useState("");
    const [modalStatus, setModalStatus] = useState(false);

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData("id", id)
    }

    const updateToDolist = () => {
        let list = [];
        task.forEach((listItem, index) => {
            if (listItem.taskStatus === "todo") {
                list.push(
                    <li className="card" key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, listItem.id)}>
                        <Card listItem={listItem} />
                    </li>)
            }
        });
        return (<ul className="card-list">{list}</ul>)
    }

    const updateInProgresslist = () => {
        let list = [];
        task.forEach((listItem, index) => {
            if (listItem.taskStatus === "inprogress") {
                list.push(
                    <li className="card" key={index} draggable onDragStart={(e) => handleDragStart(e, listItem.id)}>
                        <Card listItem={listItem} />
                    </li>)
            }
        });
        return (<ul className="card-list">{list}</ul>)
    }

    const updateFinalChecklist = () => {
        let list = [];
        task.forEach((listItem, index) => {
            if (listItem.taskStatus === "finalcheck") {
                list.push(<li className="card" key={index} draggable onDragStart={(e) => handleDragStart(e, listItem.id)}>
                    <Card listItem={listItem} />
                </li>)
            }
        });
        return (<ul className="card-list">{list}</ul>)
    }

    const updateDonelist = () => {
        let list = [];
        task.forEach((listItem, index) => {
            if (listItem.taskStatus === "done") {
                list.push(<li className="card" key={index} draggable onDragStart={(e) => handleDragStart(e, listItem.id)}>
                    <Card listItem={listItem} />
                </li>)
            }
        });
        return (<ul className="card-list">{list}</ul>)
    }

    const handleDrop = (e, cat) => {
        let id = e.dataTransfer.getData("id");
        let updatedTasks = task.filter((taskItem) => {
            if (taskItem.id === id) {
                taskItem.taskStatus = cat;
            }
            return taskItem;
        });
        setTask(updatedTasks);
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const showTaskModal = (status) => {
        setModalStatus(true)
        setTaskStatus(status);
    }

    const addTask = () => {
        task.push({ id: uuidv4(), name, profession, company, tags: ["EVENTS", "HEIDENTIC"], taskStatus }) // setting dummy tags for every new entry
        setTask(task);
        resetTaskState();
        setModalStatus(false)
    }

    const resetTaskState = () => {
        setTaskStatus("");
        setName("");
        setCompany("");
        setProfession("");
    }

    const invalidField = () => {
        return (name === "" || profession === "" || company === "")
    }

    const inputModal = (isOpen) => {
        return isOpen ?
            <div className="modal">
                <section className="modal-main">
                    <button className="closeBtn" onClick={() => setModalStatus(false)}>X</button>
                    <h3>Add New Task</h3>
                    <form onSubmit={() => addTask()}>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

                        <label htmlFor="profession">Profession</label>
                        <input id="profession" type="text" value={profession} onChange={(e) => setProfession(e.target.value)} />

                        <label htmlFor="org">Company Name</label>
                        <input id="org" type="text" value={company} onChange={(e) => setCompany(e.target.value)} />

                        <button disabled={invalidField()} type="submit">Add</button>
                    </form>
                </section>
            </div> : <></>
    }

    const countToDoItem = (status) => {
        const toDoList = task.filter(item => {
            return item.taskStatus === status
        });
        return toDoList.length;
    }

    return (
        <div className="board">
            <div className="board-column todo" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "todo")}>
                <div className="title-group">
                    <span className="title">
                        <strong>ToDo/Planned</strong>
                    </span>
                    <i className="icon moreIcon"></i>
                </div>
                <span className="subtitle">{countToDoItem("todo")} Providers</span>
                <button className="btn" onClick={() => showTaskModal('todo')}>Add New Item</button>
                {updateToDolist()}
            </div>
            <div className="board-column inprogress" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "inprogress")}>
                <div className="title-group">
                    <span className="title">
                        <strong>In Progress/Booking</strong>
                    </span>
                    <i className="icon moreIcon"></i>
                </div>
                <span className="subtitle">{countToDoItem("inprogress")} Providers</span>
                <button className="btn" onClick={() => showTaskModal('inprogress')}>Add New Item</button>
                {updateInProgresslist()}
            </div>
            <div className="board-column finalcheck" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "finalcheck")}>
                <div className="title-group">
                    <span className="title">
                        <strong>Final Check/ Agreement</strong>
                    </span>
                    <i className="icon moreIcon"></i>
                </div>
                <span className="subtitle">{countToDoItem("finalcheck")} Providers</span>
                <button className="btn" onClick={() => showTaskModal('finalcheck')}>Add New Item</button>
                {updateFinalChecklist()}
            </div>
            <div className="board-column completed" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "done")}>
                <div className="title-group">
                    <span className="title">
                        <strong>Done/Ordered</strong>
                    </span>
                    <i className="icon moreIcon"></i>
                </div>
                <span className="subtitle">{countToDoItem("done")} Providers</span>
                <button className="btn" onClick={() => showTaskModal('done')}>Add New Item</button>
                {updateDonelist()}
            </div>
            {inputModal(modalStatus)}
        </div>
    );
};

export default Board;