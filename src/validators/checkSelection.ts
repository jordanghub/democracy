import { findOverlapStart, findOverlapEnd } from 'utils/overlap';

export const checkSelection = (items, selection, content) => {
  let error = '';

  if (selection === '') {
    error = 'La chaine ne doit pas être vide';
    return error;
  }
  if (selection.length < 15) {
    error = 'La sélection doit faire au moins 15 caractères';
  }

  if (selection.length > 100) {
    error = 'La sélection doit ne doit pas faire plus de 100 caractères';
  }

  for (const item of items) {
    if (item.selectedItem.selectedText === selection) {
      error = "Vous ne pouvez pas re-sélectionner le contenu d'une selection";
      return error;
    }

    const overlapLeft = findOverlapStart(
      item.selectedItem.selectedText,
      selection,
      content,
    );
    if (overlapLeft) {
      error = 'Vous ne pouvez pas chevaucher une autre selection';
      return error;
    }

    const overlapRight = findOverlapEnd(
      item.selectedItem.selectedText,
      selection,
      content,
    );
    if (overlapRight) {
      error = 'Vous ne pouvez pas chevaucher une autre sélection';
    }
  }
  return error;
};
