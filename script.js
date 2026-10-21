const sol = document.getElementById("sol");
const luna = document.getElementById("luna");

let oscuro = false;

function DarkMode() {
    if (oscuro == false) {
        document.body.style.backgroundColor = "black";
        document.getElementById("articulo").style.backgroundColor = "black";
        document.getElementById("articulo").style.color = "white";
        oscuro = true;
        sol.hidden = true;
        luna.hidden = false;
    } else {
        document.body.style.backgroundColor = "#f2f2f2";
        document.getElementById("articulo").style.backgroundColor = "white";
        document.getElementById("articulo").style.color = "black";
        oscuro = false;
        sol.hidden = false;
        luna.hidden = true;
    }
};

function changeLanguage() {
    if (document.getElementById("idioma").value == "en") {
        document.getElementById("titulo").textContent = "CONTACT LENSES WITH NIGHT VISION";
        document.getElementById("funcionan").textContent = "HOW DO THEY WORK?";
        document.getElementById("parrafo1").textContent = "They allow you to see in the dark by converting infrared light into visible light through nanoparticles integrated into the lens. Using nanoparticles called quantum dots or UCNPs (up-conversion nanoparticles) that absorb near-infrared light (800–1600 nm) and transform it into visible light (400–700 nm) that the eye can interpret. This process, known as up-conversion, allows the user to perceive images in completely dark environments, even with closed eyelids, as infrared light can penetrate the skin better than visible light.";
        document.getElementById("tecnologiaTitulo").textContent = "TECHNOLOGY";
        document.getElementById("parrafo2").textContent = "Night vision contact lenses use nanoparticles that convert infrared light into visible images. These particles, known as quantum dots, can transform infrared signals into visual stimuli that the human eye can interpret. These lenses are made of a flexible material, similar to that of conventional contact lenses, but include a layer of infrared nanoparticles.";
        document.getElementById("aplicacionesTitulo").textContent = "WHAT APPLICATIONS COULD THEY HAVE?";
        document.getElementById("aplicacion1").textContent = "Security and surveillance: They allow you to detect movements or signals in dark environments without needing bulky devices like helmets or thermal cameras.";
        document.getElementById("aplicacion2").textContent = "Exploration and rescue: They make it easier to locate people or animals in emergency situations, like fires or natural disasters, where visibility is limited.";
        document.getElementById("aplicacion3").textContent = "Night sports: They improve the experience of activities like hiking, cycling, or night runs, providing a clear view of the surroundings.";
        document.getElementById("aplicacion4").textContent = "Scientific research: They allow scientists to study nocturnal wildlife or do research in low-light environments without disturbing the ecosystem.";
        document.getElementById("aplicacion5").textContent = "Advanced visual assistance: People with color blindness or visual difficulties could benefit from the ability to distinguish additional wavelengths.";
        document.getElementById("futuroTitulo").textContent = "THE FUTURE OF GLASSES";
        document.getElementById("parrafo3").textContent = "The future of contact lenses with night vision is promising, with advances in technology miniaturization and the improvement of comfort and safety for the user. It is expected that these lenses will integrate with other technologies, such as augmented reality, to offer more immersive visual experiences. Additionally, research is being conducted on more efficient and biocompatible materials to ensure that the lenses are safe for prolonged use.";
        document.getElementById("fuentesTitulo").textContent = "SOURCES";
        document.getElementById("fuente1").textContent = "Source 1";
        document.getElementById("fuente2").textContent = "Source 2";
        document.getElementById("fuente3").textContent = "Source 3";
        document.getElementById("fuente4").textContent = "Source 4";
    } else {
        document.getElementById("titulo").textContent = "LENTES DE CONTACTO CON VISIÓN NOCTURNA";
        document.getElementById("funcionan").textContent = "¿CÓMO FUNCIONAN?";
        document.getElementById("parrafo1").textContent = "Permiten ver en la oscuridad convirtiendo la luz infrarroja en luz visible a través de nanopartículas integradas en la lente. Utilizan nanopartículas llamadas puntos cuánticos o UCNPs (nanopartículas de conversión ascendente) que absorben la luz infrarroja cercana (800–1600 nm) y la transforman en luz visible (400–700 nm) que el ojo puede interpretar. Este proceso, conocido como conversión ascendente, permite al usuario percibir imágenes en entornos completamente oscuros, incluso con los párpados cerrados, ya que la luz infrarroja puede penetrar mejor en la piel que la luz visible.";
        document.getElementById("tecnologiaTitulo").textContent = "TECNOLOGÍA";
        document.getElementById("parrafo2").textContent = "Las lentes están hechas de materiales biocompatibles que son seguros para los ojos y tienen un recubrimiento especial que les permite filtrar la luz infrarroja. También cuentan con una fuente de energía incorporada que les permite funcionar sin necesidad de dispositivos externos. Las lentes están diseñadas para ser cómodas y fáciles de usar, con un proceso de aplicación sencillo y un mantenimiento mínimo requerido.";
        document.getElementById("aplicacionesTitulo").textContent = "¿QUÉ APLICACIONES PODRÍAN TENER?";
        document.getElementById("aplicacion1").textContent = "Seguridad y vigilancia: Permiten detectar movimientos o señales en entornos oscuros sin necesidad de dispositivos voluminosos como cascos o cámaras térmicas.";
        document.getElementById("aplicacion2").textContent = "Exploración y rescate: Facilitan la localización de personas o animales en situaciones de emergencia, como incendios o desastres naturales, donde la visibilidad es limitada.";
        document.getElementById("aplicacion3").textContent = "Deportes nocturnos: Mejoran la experiencia de actividades como el senderismo, ciclismo o carreras nocturnas, proporcionando una visión clara del entorno.";
        document.getElementById("aplicacion4").textContent = "Investigación científica: Permiten a los científicos estudiar la fauna nocturna o realizar investigaciones en entornos con poca luz sin perturbar el ecosistema.";
        document.getElementById("aplicacion5").textContent = "Asistencia visual avanzada: Personas con daltonismo o dificultades visuales podrían beneficiarse de la capacidad de distinguir longitudes de onda adicionales.";
        document.getElementById("futuroTitulo").textContent = "EL FUTURO DE LAS LENTES";
        document.getElementById("parrafo3").textContent = "El futuro de las lentes de contacto con visión nocturna es prometedor, con avances en la miniaturización de la tecnología y la mejora de la comodidad y seguridad para el usuario. Se espera que estas lentes se integren con otras tecnologías, como la realidad aumentada, para ofrecer experiencias visuales más inmersivas. Además, se están investigando materiales más eficientes y biocompatibles para garantizar que las lentes sean seguras para el uso prolongado.";
        document.getElementById("fuentesTitulo").textContent = "FUENTES";
        document.getElementById("fuente1").textContent = "Fuente 1";
        document.getElementById("fuente2").textContent = "Fuente 2";
        document.getElementById("fuente3").textContent = "Fuente 3";
        document.getElementById("fuente4").textContent = "Fuente 4";
    }
}

document.getElementById("change-color").addEventListener("click", DarkMode);
document.getElementById("idioma").addEventListener("change", changeLanguage);