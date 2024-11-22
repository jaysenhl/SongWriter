"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Swal from 'sweetalert2';

const ItemType = {
  SECTION: 'section',
};

function DraggableSection({ section, index, sections, setSections, moveSection, duplicateSection, editSection, deleteSection, saveSection, handleSaveSection }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.SECTION,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType.SECTION,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        console.log(`Moving item from ${draggedItem.index} to ${index}`);
        moveSection(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => drop(node)} className={`p-4 bg-white rounded-lg shadow-xl ${isDragging ? 'opacity-50' : ''}`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">{section.type}</h2>
        <button ref={drag} className="cursor-move bg-gray-300 text-gray-700 px-2 py-1 rounded-full shadow-md hover:bg-gray-400">
          <i className="fas fa-hand-paper"></i>
        </button>
      </div>
      <div className="text-center">
        {section.editing ? (
          <div>
            <textarea
              className="w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              value={Array.isArray(section.content) ? section.content.join('\n') : section.content}
              onChange={(e) => {
                const newSections = [...sections];
                newSections[index].content = e.target.value;
                setSections(newSections);
              }}
            />
            <button onClick={() => handleSaveSection(index)} className="bg-green-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-green-600">
              Guardar Sección
            </button>
          </div>
        ) : (
          <div>
            {Array.isArray(section.content) ? (
              section.content.map((line, i) => (
                <h3 key={i} className="mb-2 text-lg font-bold whitespace-pre-line">{line}</h3>
              ))
            ) : (
              <h3 className="mb-2 text-lg font-bold whitespace-pre-line">{section.content}</h3>
            )}
          </div>
        )}
        <div className="flex justify-center space-x-2 mt-2">
          <button onClick={() => duplicateSection(index)} className="bg-yellow-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-yellow-600">
            <i className="fas fa-copy mr-1"></i> Duplicar
          </button>
          <button onClick={() => editSection(index)} className="bg-blue-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-blue-600">
            <i className="fas fa-edit mr-1"></i> Editar
          </button>
          <button onClick={() => deleteSection(index)} className="bg-red-500 text-white px-3 py-1 rounded-full shadow-md hover:bg-red-600">
            <i className="fas fa-trash mr-1"></i> Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CrearCancion() {
  const [sections, setSections] = useState([]);
  const [counts, setCounts] = useState({ Verso: 0, Coro: 0, Hook: 0, Random: 0 });
  const [creationDate, setCreationDate] = useState('');
  const [songName, setSongName] = useState('');
  const [beatName, setBeatName] = useState('');

  const isClient = typeof window !== 'undefined';

  useEffect(() => {
    if (isClient) {
      // Client-specific logic here
    }
  }, []);

  const addSection = (type) => {
    setSections([...sections, { type, content: '', editing: true }]);
  };

  const saveSection = (index) => {
    const lines = sections[index].content.split('\n');
    setSections(sections.map((section, i) => (
      i === index ? { ...section, content: lines, editing: false } : section
    )));
  };

  const handleSaveSection = (index) => {
    const sectionContent = sections[index].content.trim();
    if (!sectionContent) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El contenido de la sección no puede estar vacío!',
      });
      return;
    }
    saveSection(index);
  };

  const editSection = (index) => {
    setSections(sections.map((section, i) => (
      i === index ? { ...section, editing: true } : section
    )));
  };

  const deleteSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const duplicateSection = (index) => {
    const newSection = { ...sections[index], editing: false };
    setSections([...sections.slice(0, index + 1), newSection, ...sections.slice(index + 1)]);
  };

  const moveSection = (fromIndex, toIndex) => {
    const updatedSections = [...sections];
    const [movedSection] = updatedSections.splice(fromIndex, 1);
    updatedSections.splice(toIndex, 0, movedSection);
    setSections(updatedSections);
  };

  const addCreationDate = () => {
    const now = new Date();
    const formattedDate = format(now, "eeee dd 'de' MMMM yyyy", { locale: es });
    setCreationDate(formattedDate);
  };

  const handleSaveSong = () => {
    if (!songName || !beatName) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre de la canción y el nombre del ritmo no pueden estar vacíos!',
      });
      return;
    }
    if (sections.some(section => !section.content.trim())) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puedes guardar secciones vacías!',
      });
      return;
    }
    // Proceed with saving the song
  };

  return (
    <DndProvider backend={isClient ? TouchBackend : HTML5Backend} options={isClient ? { enableMouseEvents: true } : {}}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
        <div className="flex justify-center mb-4">
          <Link href="/">
            <button className="bg-gray-800 text-white px-4 py-2 rounded shadow-md hover:bg-gray-900">
              <i className="fas fa-home mr-2"></i> Return Home
            </button>
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-8">Crear Canción</h1>
        <div className="w-full max-w-md">
          <label className="block text-lg font-medium mb-2" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nombre de la canción"
          />
          <label className="block text-lg font-medium mb-2" htmlFor="beat-name">
            Beat Name:
          </label>
          <input
            type="text"
            id="beat-name"
            value={beatName}
            onChange={(e) => setBeatName(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nombre del ritmo"
          />
          <button onClick={addCreationDate} className="w-full mb-4 bg-indigo-500 text-white px-4 py-2 rounded shadow-md hover:bg-indigo-600">
            <i className="fas fa-calendar-plus mr-2"></i> Añadir Fecha de Creación
          </button>
          {creationDate && (
            <div className="text-center font-bold uppercase mt-2 mb-4">
              {creationDate}
            </div>
          )}
          <div className="space-y-4">
            <button onClick={() => addSection('Verso')} className="w-full bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600">
              <i className="fas fa-plus mr-2"></i> Añadir Verso
            </button>
            <button onClick={() => addSection('Coro')} className="w-full bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600">
              <i className="fas fa-music mr-2"></i> Añadir Coro
            </button>
            <button onClick={() => addSection('Hook')} className="w-full bg-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-600">
              <i className="fas fa-star mr-2"></i> Añadir Hook
            </button>
            <button onClick={() => addSection('Random')} className="w-full bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-600">
              <i className="fas fa-random mr-2"></i> Random
            </button>
            <button onClick={handleSaveSong} className="w-full bg-green-500 text-white px-3 py-2 rounded-full shadow-md hover:bg-green-600">
              <i className="fas fa-save mr-2"></i> Guardar Canción
            </button>
          </div>
          <div className="mt-8 space-y-4">
            {sections.map((section, index) => (
              <DraggableSection key={index} section={section} index={index} sections={sections} setSections={setSections} moveSection={moveSection} duplicateSection={duplicateSection} editSection={editSection} deleteSection={deleteSection} saveSection={saveSection} handleSaveSection={handleSaveSection} />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
