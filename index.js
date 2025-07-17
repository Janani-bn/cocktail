import express from "express";
import axios from "axios";
const app = express();
const port = 3000;
app.use(express.static("viwes"));

const API_URL_name = "https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const API_URL_random = "https://thecocktaildb.com/api/json/v1/1/random.php";

app.get("/", async (req,res) =>{
    try{
        const response = await axios.get(API_URL_name);
        const result = response.data;
        const random = Math.floor( Math.random() * result.drinks.length );
        const jsonData = JSON.stringify(result.drinks[random].strDrink);
        const jsonData2 = JSON.stringify(result.drinks[random].strCategory);
        const jsonData3 = JSON.stringify(result.drinks[random].strInstructions);
        const jsonData4 = JSON.stringify(result.drinks[random].strIngredirnt1);
        const jsonData5 = JSON.stringify(result.drinks[random].strIngredient2);
        const jsonData6 = JSON.stringify(result.drinks[random].strIngredient3);
        const jsonData7 = JSON.stringify(result.drinks[random].strIngredient4);
        const jsonData8 = JSON.stringify(result.drinks[random].strIngredient5);
        const jsonData9 = JSON.stringify(result.drinks[random].strIngredient6);
        const jsonData10 = JSON.stringify(result.drinks[random].strIngredient7);
        const image = result.drinks[random].strDrinkThumb;
        const jsonData11 = JSON.stringify(result.drinks[random].strMeasure1);
        const jsonData12 = JSON.stringify(result.drinks[random].strMeasure2);
        const jsonData13 = JSON.stringify(result.drinks[random].strMeasure3);
        res.render("index.ejs",
            {   drinkName: jsonData,
                drinkCategory: jsonData2,
                drinkInstructions: jsonData3,
                drinkIngredient1: jsonData4,
                drinkIngredient2: jsonData5,
                drinkIngredient3: jsonData6,
                drinkIngredient4: jsonData7,
                drinkIngredient5: jsonData8,
                drinkIngredient6: jsonData9,
                drinkIngredient7: jsonData10,
                drinkMeasure1: jsonData11,
                drinkMeasure2: jsonData12,
                drinkMeasure3: jsonData13,
             });
    }catch(error){
        console.error("Failed to make request",error.message);
        res.render("index.ejs",
            { error: error.mesage });
        }
    });

    app.get("/Quiz",(req,res) =>{
        res.render("Quiz.ejs");
    });

app.listen(port , () =>{
    console.log(`Server running on port ${port}`);
});

app.get("/index2.ejs", async (req,res) =>{
    const response = await axios.get(API_URL_random);
    const result = response.data;
    const strDrink = result.drinks[0].strDrink;
    const strCategory = result.drinks[0].strCategory;
    const strOH = result.drinks[0].strAlcoholic;
    const strGlass = result.drinks[0].strGlass;
    const strInstructions = result.drinks[0].strInstructions;
    const strIngredient1 = result.drinks[0].strIngredient1;
    const strIngredient2 = result.drinks[0].strIngredient2;
    const strIngredient3 = result.drinks[0].strIngredient3;
    const strIngredient4 = result.drinks[0].strIngredient4;
    res.render("index2.ejs",
        { drinkName: strDrink,
            drinkCategory: strCategory,
            drinkOH: strOH,
            drinkGlass: strGlass,
            drinkInstructions: strInstructions,
            drinkIngredient1: strIngredient1,
            drinkIngredient2: strIngredient2,
            drinkIngredient3: strIngredient3,
            drinkIngredient4: strIngredient4,
        });
   });
//  const random = Math.floor( Math.random() * result.drinks.length );