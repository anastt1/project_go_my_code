/*window.addEventListener('DOMContentLoaded', (event) => {
    // Sélectionner tous les boutons de suppression
    const removeButtons = document.querySelectorAll('.remove');
  
    // Ajouter un événement de clic à chaque bouton de suppression
    removeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const item = event.target.closest('.item');
        item.remove();
        updateTotal();
      });
    });
  
    // Sélectionner tous les champs de quantité
    const quantityInputs = document.querySelectorAll('.quantity input');
  
    // Ajouter un écouteur d'événement "change" à chaque champ de quantité
    quantityInputs.forEach((input) => {
      input.addEventListener('change', (event) => {
        updateTotal();
      });
    });
  
    // Mettre à jour le total initial
    updateTotal();
  });
  
  function updateTotal() {
    const prices = document.querySelectorAll('.price');
    const quantities = document.querySelectorAll('.quantity input');
    let total = 0;
  
    for (let i = 0; i < prices.length; i++) {
      const price = parseFloat(prices[i].textContent.replace('$', ''));
      const quantity = parseInt(quantities[i].value);
  
      total += price * quantity;
    }
  
    const totalAmount = document.getElementById('total-amount');
    totalAmount.textContent = '$' + total.toFixed(2);
  }
  */
