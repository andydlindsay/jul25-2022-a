import axios from 'axios';
import {useEffect, useState} from 'react';

const DataFetching = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';

    const recipePromise = axios.get(`/recipes`)
    const ingredientPromise = axios.get(`/ingredients`);

    const promises = [recipePromise, ingredientPromise];

    Promise.all(promises)
      .then((response) => {
        console.log(response);

        const recipeResponse = response[0];
        const ingredientResponse = response[1];

        setRecipes(recipeResponse.data);
        setIngredients(ingredientResponse.data);
        // setRecipes(response.data);
        // return axios.get(`${baseUrl}/ingredients`);
      });
  }, []);

  const mappedRecipes = recipes.map((recipe) => {
    return <p key={recipe.id}>Recipe: {recipe.title}</p>;
  });
  
  return (
    <div>
      <h2>DataFetching Component</h2>

      { mappedRecipes }
    </div>
  );
};

export default DataFetching;
