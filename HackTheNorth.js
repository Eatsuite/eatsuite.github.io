require('bootstrap')
document.getElementById('sky').clientWidth;	
String[] productNames = { "Prime Chicken Breasts, Boneless Skinless", "Kosher Salt", "Broccoli Stems","Olive Oil","Lemon Juice","Black Pepper","Brussells Sprouts","Celery Stalks","Hazelnuts","Parsley","Parmesan Cheese" };
String[] ids={"20071473_KG","20124865_EA","20039812_EA", "20160496001_EA", "20081313_EA","20047211_EA","20036155001_KG","20163119001_EA","20895903002_EA","20139141001_EA","20347407002_EA"}
String[] prices = { "12.408", "3.29", "3.99","5.49", "3.29","8.99","0.1977","1.99","3.49","1.49","7.49" };
Strings[] pictures = {"https://assets.shop.loblaws.ca/products/20071473/b1/en/front/20071473_front_a01.png","https://assets.shop.loblaws.ca/products/20124865/b1/en/front/20124865_front_a01.png","https://assets.shop.loblaws.ca/products/20039812/b1/en/front/20039812_front_a01.png","https://assets.shop.loblaws.ca/products/20160496001/b1/en/front/20160496001_front_a01.png","https://assets.shop.loblaws.ca/products/20081313/b1/en/front/20081313_front_a01.png","https://assets.shop.loblaws.ca/products/20047211/b1/en/front/20047211_front_a01.png","https://assets.shop.loblaws.ca/products/20036155001/b1/en/front/20036155001_front_a01.png","https://assets.shop.loblaws.ca/products/20163119001/b1/en/front/20163119001_front_a01.png","https://assets.shop.loblaws.ca/products/20895903002/b1/en/front/20895903002_front_a01.png", "https://assets.shop.loblaws.ca/products/20139141001/b1/en/front/20139141001_front_a01.png","https://assets.shop.loblaws.ca/products/20347407002/b1/en/front/20347407002_front_a01.png"}

JSONArray values;

void setup() {

  values = new JSONArray();

  for (int i = 0; i < species.length; i++) {

    JSONObject animal = new JSONObject();

    animal.setInt("id", i);
    animal.setString("species", species[i]);
    animal.setString("name", names[i]);

    values.setJSONObject(i, animal);
  }

  saveJSONArray(values, "data/new.json");
}