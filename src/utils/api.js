export const getIngredientsRequest = async () => {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const addOrderRequest = async data => {
  const url = 'https://norma.nomoreparties.space/api/orders';
  const response = await fetch(url, {
    method: 'POST', 
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  return json;
};