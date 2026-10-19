let oscuro = false;

function DarkMode() {
    if (oscuro == false) {
        document.body.style.backgroundColor = "black";
        document.getElementById("articulo").style.backgroundColor = "black";
        document.getElementById("articulo").style.color = "white";
        oscuro = true;
    } else {
        document.body.style.backgroundColor = "#f2f2f2";
        document.getElementById("articulo").style.backgroundColor = "white";
        document.getElementById("articulo").style.color = "black";
        oscuro = false;
    }
};

function changeLanguage() {
    if (document.getElementById("idioma").value == "en") {
        document.getElementById("articulo").innerHTML = `
            <h1>CONTACT LENSES WITH NIGHT VISION</h1>
            <div class="derecha">
                <img id="ojo-image" src="ojo.webp" alt="Contact lens">
            </div>
            <p>Contact lenses with night vision are a revolutionary technology that allows people to see in low light conditions. These lenses use special materials and coatings to enhance the user's vision in the dark, making them ideal for activities such as driving at night or exploring dark environments.</p>
            <p>The lenses work by amplifying available light and filtering out certain wavelengths, allowing the user to see more clearly in low light situations. They are also designed to be comfortable and safe for long-term use, with features such as UV protection and moisture retention.</p>
        `;
    } else {
        document.getElementById("articulo").innerHTML = `
            <h1>LENTES DE CONTACTO CON VISIÓN NOCTURNA</h1>
            <div class="derecha">
                <img id="ojo-image" src="ojo.webp" alt="Lente de contacto">
            </div>
            <p>Los lentes de contacto con visión nocturna son una tecnología revolucionaria que permite a las personas ver en condiciones de poca luz. Estos lentes utilizan materiales y recubrimientos especiales para mejorar la visión del usuario en la oscuridad, lo que los hace ideales para actividades como conducir de noche o explorar entornos oscuros.</p>
            <p>Los lentes funcionan amplificando la luz disponible y filtrando ciertas longitudes de onda, lo que permite al usuario ver con mayor claridad en situaciones de poca luz. También están diseñados para ser cómodos y seguros para un uso prolongado, con características como protección UV y retención de humedad.</p>
        `;
    }
}

document.getElementById("change-color").addEventListener("click", DarkMode);
document.getElementById("idioma").addEventListener("change", changeLanguage);