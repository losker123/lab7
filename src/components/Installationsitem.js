
import React, { useState } from "react";
import Custompopup from '../components/Custompopup';
import '../styles/Installationsitem.css'; 

const Installationsitem = ({ installation, onDelete, onEdit }) => {
  const [editedInstallation, setEditedInstallation] = useState(installation);

  const handleEdit = () => {
    onEdit(editedInstallation);
  };

  const handleDelete = () => {
    onDelete(installation.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name.startsWith("person.")) {
      const personProperty = name.split(".")[1];
      setEditedInstallation((prevState) => ({
        ...prevState,
        person: {
          ...prevState.person,
          [personProperty]: value
        }
      }));
    } else {
      setEditedInstallation({
        ...editedInstallation,
        [name]: value
      });
    }
  };
  

  return ( 
    <div className="installation-item">
      <h3 className='installation-item-type'>{installation.operation_type}</h3>
      <h3 className='installation-item-adress'> {installation.address}</h3>
      
     
      <Custompopup 
        item={<button className='popup-btn'>Информация</button>}
        
        popupContent={
          <div className="popup-content">
            <img src={installation.person.photo} alt={installation.system_type} className="installation-image" />
            <p><strong>Дата и время:</strong> {installation.date_time}</p>
            <p><strong>Человек:</strong> {installation.person.full_name}</p>
            <p><strong>Контактные данные:</strong> {installation.person.contact_information}</p>
            <p><strong>Опыт работы:</strong> {installation.person.years_of_experience} лет</p>
            <p><strong>Тип системы:</strong> {installation.system_type}</p>
          </div>
        }
      />
      <Custompopup
        item={<button className='edit-btn'>Изменить</button>}
        popupContent={
          <div className="popup-content">
            <input
              type="text"
              name="operation_type"
              placeholder="Тип операции"
              value={editedInstallation.operation_type}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="system_type"
              placeholder="Тип системы"
              value={editedInstallation.system_type}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="date_time"
              placeholder="Дата и время"
              value={editedInstallation.date_time}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="person.years_of_experience"
              placeholder="Опыт работы"
              value={editedInstallation.person.years_of_experience}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="person.full_name"
              placeholder="Полное имя"
              value={editedInstallation.person.full_name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="person.contact_information"
              placeholder="Контактная информация"
              value={editedInstallation.person.contact_information}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Адрес"
              value={editedInstallation.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="person.photo"
              placeholder="Ссылка на изображение"
              value={editedInstallation.person.photo}
              onChange={handleInputChange}
            />
            <button className='edit-btn2' onClick={handleEdit}>Сохранить</button>
          </div>
        }
      />
      
      <button className='delete-btnn' onClick={handleDelete}>Удалить</button>
    </div>
  );
}
 
export default Installationsitem;
