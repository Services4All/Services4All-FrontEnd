import React, { useState, handleOpen } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Footer from "./elements/Footer";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  view: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  sampleMedia: {
    paddingTop: "56.25%", // 16:9
  }, 
  sampleGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  sampleContent: {
    flexGrow: 1,
  },
  
}));

function Setup(){
	let history = useHistory();
	const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const classes = useStyles();
	const [namesArray] = useState([
		"Servicio de Carpintería Osorio Barrio Alamos",
		"Servicio de Plomería Barrio Ciudadela Colsubsidio",
		"Servicio de Mecánica Daytona Barrio Mirandela",
		"Servicio de Consultoría médica Colina",
		"Servicio de Cerrajería Barrio Suba Rincon",
		"Servicio de Plomería Innovar Barrio Villaluz",
		"Servicio de Carpintería Gómez Barrio Villaluz",
		"Servicio de Carpintería Barrio Santa Isabel",
		"Servicio de Mecánica Barrio Florida",
		"Servicio de Zapatería Restrepo",
		"Servicio de Consultoría médica Barrio Quirigua",
		"Servicio de Cerrajería Barrio Villas de Gratamira",
	]);
	const [imgArray] = useState([
		"https://www.tumercadoclick.com/web/templates/_tmcPhotos/TMC_Z3u7uk9wp8Y7nB3tRLLcaGwI_hD85DbvXASs2pzVU_20200316213433_0.png",
		"https://www.plomerosyreparaciones.com/images/plomeros-bogota.jpg",
		"https://daytonautocol.com/wp-content/uploads/2019/01/Daytona-Centro-Servicio-Automotriz-bogota-logo.png",
		"https://supresenciacooperativa.com/wp-content/uploads/2016/10/logo_colsanitas.jpg",
		"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUQEhIVFRUWFhgVFRUQFRAVFRUVFRcWFhUYFRUYHiggGBolHxUWIzEhJykrLi4uFx8zODMuNygtLi0BCgoKDg0OGxAQGjUlHyU1Ny0uKy81Ky8tLS8tNSstMy0tLSs4LS0tLSstLS0tNS0tNy0vLS0tLS0rNzUrLTU1Lf/AABEIANgA6QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABGEAACAQIEAwQGBgcGBwADAAABAgMAEQQFEiETMUEGIlFhIzJxgZGxFEJScqHBBxUzYpKy0TVjc3TC0iVTgqLh8PEWJEP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAoEQEAAgEDAwIGAwAAAAAAAAAAARECAyFBBBIxMlETFCIzYXEjwfD/2gAMAwEAAhEDEQA/APcaKKKAooooCiiigKKS9VmL7RYOM2adL+C3c/Bb0FpRWe//ADXL72M9vvJKP9NTsH2gwku0c8ZPhqAPwNBZ0Ul6WgKKKKAooooCiiigKK5ZgOdNHEDwNA/RUcYodQRTyuDuDeg6ooooCiiigKKKKAooooCiiigKKKKAquzvOIsLHxJD5Ko3Z26BRU6aQKpZjYKCST0AFyayGRwHGTnHzDuAlcOh5Ko2128TvQdRZfisb6TFu0UJ3XDxEqSOnFcfL5U3i89yvA+iRVLjmkCa3/6rfma5z7M2nlbCxOUjS3HkT1jflGh6E+NTsp7OhFsirAvgFDSN5sTyPtuaDJ479J2CBtJg5rfvpH8iaiL2x7P4g6ZIjCT9Zo9Fv+pDtXosnZuJh3nc/e4RHw01n86/RrhJrkopNvDht/GnX2g0DeCjxEKCfL8QMTBz4Mjatv7t+hrUdn8+ixaEpdXXaSN9nQ+Y8POvHJ+zuYZPKcRg3Z413khfnp8wNmH7wrYJilxUKZtge7Mg9In2wPWRwOZoPSaKgZJmaYmBJ05MNx1VhzU+YNT6AooooCuJpAoua7qpziezKnlf8h+dA5xSxuf/AJS66hJLXRloJDvTK4gobj3jxpl5qjSzUGmhlDAMORruqjs9PqDr9kg/xX/pVvQFFFFAUUUUBRRRQFFFFAUUUUGc7dTkYURLzmkSL3Mbt+ANPY+VcLgmYbCOPb3CoXbU+mwQ6cc/gu1J2+P/AA6b7o+YoIP6N8KZIfpDi92LC/WRt2b3XsPfW5rO/o+UDLcPbqpJ9pdq0VAUUUUETMcGJF8GHqnz8D5HrWA7LYdcNmMsKbRzrxOH9hwbOBXpVYXg2zxx04QceRe1/wAQfjQPdmD9GzGfB8klHHiHgeTgf+9K2lYjPDozfAuOba0PsKn+tbegKKKKArM9o5NMynoV29xN/wAq01VXaLLDPF3fXXdb9fFT7fyFBQpi6VsXWcad1YowKsDYg7EGl+lGgvXxlMSYqqZsTXeBilnkEcQuep+qo8WPQUGy7IXIkfoSqj3XJ/mFaKomWYJYYliXe3M/aJ5mpdAUUUUBRRRQFFFFAUUUUBRRRQZTtt+1wR/vz/LSdvv7Om+6PmKO3Pr4M/3/AOVHbz+zpvuj5igl/o//ALNw/wB0/wA7Voaz36Pv7Nw/3T/O1aGgKKKKArFyf243+XX5mtpWLm/tw/5dfmaBvtL/AGpgPvt8q3FYXtIf+KYD77fKt1QFFFFAUUVGxmKCDz8PzNBGzfJYMQO+veHJ12Ye/qPI1ipsm0uUDhwNwy9R7K0k/pNyS3l/QcqxHZmV585xkoYlIUWEAE6Tc729hRv/AE0FvlHZ5ZnPFk0Kp9QEB2+PIeftrdYHAxQpoiQKvl1PiTzJ8zVOMMo3IBPWn8NLo9U7fZ6f+KC6opqCYMLj3jwp2gKKKKAooooCiiigKKKKBKp867RRYZgrh2JF+4By5dT5VcGsD+kAemX/AAx82rjr5zhjcL4Y3NJuau2LeA2sg9MgvZrgC+o8rd4bCpGcwSYiBoGAAYWJDWPypjKDtD/l/wA0q1rycup1b9TXGnj7IXZ3jYWEYcqrImyFW71iWJ1k7Hn0Aq1/Wrf8pv4k/rUY1zSOt1Y5R8DGUz9bH/lP8Yv91H62/upPjD/uqDRU/P6p8vim/rf+6k+MP++s5omOOOMaIjucMIrxHYE7klhvy2q1pKieu1Z5Wjp8FHnxlfEQYoRMDASQrNFZr+JDEj4VpY+0kG2oOvjdbgeO4NUucHue+qN22NddLq9TlGehg9PoooY23r12E1iJgi3PuHiayGf5poUm+5q1znMVXdjy5DwqtyPLeM/0uYejXeJWHrEb6yPAdPHn4XBcsnlSAvMukqpYhudgNW/htbasr+hpWMGJmO7STbnxIUMfxc1o+2WJK5fipORaNx7DJ3R8NX4VWfoji05df7Uzt8Aqf6aC8zrEuikioWCXFxwriJADG++19SKfVLDwIty8RU7PEuhrQ5S4fDxmwIKKCOnKxFvjQV+CxV7Mp/8ANXMMoYXH/wArMZhhGwpLoCYTvtc8PyP7vgf/AExIM9XUAHsSbc+ZNBtb0tVsV7Bi7E28Tb4Vw2KYGw1H2XNBa0VXPmOgXb8qsRQFFFFAUUUUCGsJ2/HpV+4Pm1bs1hu3w9Iv3PzNZuq9Dppeo/k52g/y/wCcdW9U2TnbD/4DfOOrivFy8t0ENcmujXBrmtDmRwouSAB1JsKhzZrEh0sSD4EEN/Ce9+FZD9KHatsFADH+2kZkiJ3CBdnkt9q5Kjwt5mvDDnWJMnFMzs173ZiQfIryt5V6eh0MZYd2XLNnrzE1D6rimVhdSCPLx8D4Hyrq9YLsLmheOOQbK6LqW9wtyFIHkCfcB51u6xa+l8PL8NGln3Qrs6Pc99R8Jg4lH/7GpSTsCdIt43605np7nvFMw5ssiqktrjkSNjWvosMMvU5dTOUeGvwmYFxqG4+F/Yah5jmjMeHGpLE2CjmT4+zz5UwM2iACqdR+ygLH3AVYZLA93ldNJewANtWkX5+FyeXlXrMKHgOzYLCXEnW3MJ9Rfb9s/h5das84k0wsfMD2AkVOqp7TMRBcfaX50FLmmEixMDwOe64tdTuDzBHmDY+6usmwUWFgWCPZVHU7kndifMk1BGKHUD3gUHFDoB8BQSsyxKlTbf2b/KrnskxOEX2vb+Nqz7wuRdifZV/2Te8JX7LkD2Gx/M0F1TS4ZBeyKL87KBf207RQUWLwU0VzCNa/YJ7y/dJ5j8fbVFiMfjCdK4aa/wDhyW/itat1RQZjIsonLCXE2Ft1juGN+hbpt4b1pxRRQFFFFAUUl6L0AaxPb0ekX7n5mtsaxfbod9PufmazdV9t00vUTJvVw/8AgP8AOOriqXJz3cP/AIMn80dXN68XPy3QDXJNKTXBNc14eRfpsyqR1SVQTwdZIF/2cjA6v+lyQfDUvjXkEMTMwVQSSbADqa+rc3wiSxkMNxcoRswa1hY+d7EciCQdjXjGGigTPMVCiLo3VNgN10arAbC/eNhXt9Nr92ldeGHV06z/AG2n6OcpeOBQ3LSEHgSGV5WHkCoW/wC/7a3xNQsqkDJqAA35AWAX1kUDoArCwqWWrzeqz7s69mvQxrG/dVZ+e57xWfBq8z9u57xVAh/L51OlGxqeXrscSr6qgfdAHyrukor3Xmlqs7SC+GbyKn/uFWVQs7W+Hl+4T8N/yoMLmC2W4qL2cWR2dzbQhVfe97W+H4inswl7lWHZWG2AlfxmX4Lw/wCpoLfFjuVJ7JepJ9//AEiouIN091TOywtE/wB8/JaC7opL0XoFopKKBaKSigWikooEorm9Jeg6vWQ7bjvp9z8zWtvWU7Z+un3T86zdV9t00vUiZQdsP/hy/wAyVc3qkyo7Qfcl/mSri9eLn5ejjGzpjXBNIxrgtVF4g3ipAACehDe5PSH8ENfNuW5j/wAUE5PrTsPdIWX5NXv3aWciBwttbRusYJsGkZdIW/mGb4GvDoOwWODAkwrYg7zRg7G/IkV7HRYx8H9sHUT/ACfp7f2fm2YeQPv3HyCVas1Z7s8H2LW5EEKyNz0m91JHQdfGrstWDqcf5GrRn6FZn7dz31RRHce0fOrfPm7vvqkgbvD2j51fSjZTUnd7MaL02Xo1V7Tzzl6j5gLxSD9xv5TTmqmcdMFidj0U/Kg84xanTWq7Pw2yw+et/gT/ALay8uHJG5rVdkJQYXhPQ/8Aa43/ABB+NArbp7qn9m/2TffPyFZ/Du2m1+W1XXZySwdDzvqHsOx+X40F5eiuL0t6Dqiub0XoOqKSigW9F6S9F6BnVSaqbLVwWoHi9ZrtYbsn3T86vGkqg7Qm7L7D8xWbq/tS66PrQ8sP7H7s38y1b3qkwDW4Xlxf5hVnxK8bKN3o4+DztTJauZJKYaWq0tZ2QAixAI8DYiuAAOQA9gFNNMKafEqOoq0RKszCSWrlnqA+ZRDm6/xCmHzaL7QP3bn5VaMJnhWcoNZ83dHtqnw7d4e0fMVKzHFiTZTb73d+dM4DD3cd4cxyDHkfZWvT08qqnDPKLer8WlElUseMJqQuINeqxLQSVWdosRaG32mC/Nv9NdnE2Fyaj4stLGU2AI6i9vP20FBIwtUzsvNbEWHVTf3b3/D8arMXk8qf/wBbj8as+y8ixsycyRfUee3S/hQO4br7T86l4aXhyK3TkfYagRSaWZT0Y/PannkBFBqtVLqqty7E6o1Plb4bVLElBI1Ut6YD0oagevS3prVShqBy9F64vRqoIjNTTvXZFcFaCNLIaqM1WRhdRcjxq9ZKbaKoyxjKKlMTXhgZZMWjXC2AuQNNwCefmefjXBzDHeA90Z/rW9MAps4YeFcvl9P2X+Ln7sGZcc3VvcqD5g0n0TGNzZv4gPlW7OFHhSfRhUxoaccInUy92GGTYg82PvZj8zXa9nHPNh8L1tvo1H0erxhjHCvdPuyCdnPFj7qfTs6nUsffWpEFKIKmoQz0WQxD6vxvU+DAovJQKsxDRwqkRlWlJNSeHScOgrsW7BTYE+Q60Q5zEBZtSn95WH42tVgYabfDjwoKXNM2RhZCWPgoJrnJMPJqvyJHXoKtnw3gKZw0ojfvbAjYnl8aB/G5I8pB1gWH1bg+81FbIWX13YjyY1fRYlSNiKiZnjAEO9AuWzAAp0WwHsN/6VPV6osqjbdj9bf3dKuo1oHw1dg02q12BQdg10DXIFKBQdg0tcgUtAyRXJFOWpLUDRWkK09aktQZ+PNZnmxEMcCMYAu5mYay6lgtuEdJsB4+sK5x2dmHEpBLGqJIjMkpkaxdBcx6dHreG+/S52rjK8qmSTEzPBG0ks5kjYsjcNAqJGCedxpJIHxo7QZTiMUj7aHjZXwml1sJFsRJIfHmttxpJ6nbpWNud5UTGZxPGsBfDKGnmEKpxmuuoMwZvReCm46VHxnaVo48SxgBfDOiMolOl+JbRofR63eF1I2vzqXjcBiZpsHJJGoWIu8wEgPpGjMY0bbqNTHex5UvaHJDJFHBBGgT6RHLMLhdSIwdha3eZiBz8N6R27WT3b0czPHSwQzTPCloo+ILSt3iNWpbmPumwG+99XSmIM4kMqQtAA0mHM66JC+m2nuOCi6b6rA73INLn+WTTYSXDwwxxiQoLakUadQMpOkWuVFgPjTmV5TJh8VI0ar9HnAdlJGuKYbNp23RgL89jT6aTvZuLNJmnmgWBC0KRsxEzWJkBIUei52H409hsxaYyfR4w6xuY9buUDuvrBLK1wDtc23rvIsBKk+KllUDjSqy2YNZERUUHwOzHw3pjJcsxGFgfDoEY65GilLWFpGZwZFte66ul726VE0RbnCZ/FLHCyCzTs6qsjBLNEDxAzb8rW2BvcVZwM2jVKojI1ahq1ABSe9qsNiBfl1qrTszGmHjwjQJiIlUkmQhX4xJJfyBudwbjzqXhMi0YD6EZCbxvHrNyRr1cr7kLqsPICk9vBHdy4izB5Ilnhh1xtYrdyrshNg6ppOxG4uRt4UzBmc0kmJjSBD9HYLfjMOIxQPYej2NiB7TUvIsPPFh4YHRLxIkZZXurCNQoKi1wSByNreNQcmyqaIyyPBG0suIaUOWQ6EYqAL21XCg7Dr1ptub7G8Xnzo+KUQoVwqK7MZiurUpbSPRmzWA69RT2Jzdg2FVIbnFchI5Ro7RmQ6lCNyAt7ar5+zOIc4ieyLiDiFxGHYsGXSiIgjk25EKwPMbgjlU7M8mkxOJiaaJeCsMqOocE8SbSCV8QoU2PPflVqxReSTkuP8ApAkJTSY5XiNm1oxQ2JR7C492xBFNZXmK4iSaMJbhFNJJvxEkXUr2t3QbHx/KuMFl+LGGXCShWUMY2ljcKz4cXANrAiQiwNvEkG9CYF8NjJ8Va0DYdAxeRmYPDra9mJOnS1ufuqtRum52VcmcD6LNijhY7RTGEKJTeQiQRXU8LbvNy8jU/NG+jQy4h8LGREgcWlPeNyCoJj2PL41BweRTvluEh0C5lTEYhZCFOkyGYrYjcklRbyNWmfZXNNh2w8UMcatJGSAyLdFdXkvpFrm1gPLc1aYxtWJyo9g8zY4kYZ4VQmET6kk1hRqC6XBRdJ3253sfClw2ctLC2IghDxDVpLSaGlCXDNGuki2xtci9ug3rnLsnkhnnVQPo041jca4pWBEigW3Q7Eb7HypvL8qxUeAGBGgMEMImDXXQbjWEtfXY+ryv1qKxWvJLw+fRy8EQ2Zp4jMgkbhjQCoNzYnVdgLAHkfCrXCuxQF10MRut9Wk+Gqwv8Kz+N7NRvCuFOHjkjjiCQO7EPG1iCSQLj6p28OVXuWYQxQxwly5jRULtzbSoGo+ZtVZrhMXykilFJXQqqxaKBS0Ddcsbb11Tc4OlrC5sbDlc22oKyPGzyTtGhjVRFHKvEjkLekLizWcW9Tw6+VQRn8xBYRqbR6mRVkdldZjDJYg3dFKs2y3IFTcBlDKqO0jpIYIopBGYyvo1PqkoTzZtwac/UyBgyvIlkWNQhSyhW1g7qSTfc3Jvc3q+yu6E2dOWjVJISGlaNzw5gUCwtKNUZcFW7vLqCD5U9luYYibUulI2T1i6yENqLaCqXUqCoVtzcardL1IOUIZElMkmtX4l/R946DHZu7y0kiwtzvz3p2XAAycVXdHKhWMZWzAXK6lYEXFzvz3qLgqVWM9lWzvGojUyJOV1ExtG4TiKfrRG9zsCAb9DT2Ix04kRQYtLzmIHQ5IXhGUG4exO1vDe9TsPgFRgVLWAYaTpKsXbUzMSNRYne9+pqLDkUScMIzqschlRQVKgldGnvKSECkgKOQPkLTcFSrE7QT8NntHcRYhxeOZBqw7EAKWb0gYAk6T3fOrLNMwkiwySjRqLQq2pX02ldEJADXFtd+Z5W63qNiMtgReAXmkJSUKi6GdVn1cRhZQFvdhqbYchXGIwjMoWRcXpUxkEHBMRwmDr3U3O6ryBOw86Xiipdy5y6nvMgQ6yJhDiGTuEKVYKToN9RuTawFutpeLx7hsNoMZWZ9LGzMLcNpLowI27ttx1v5UuFw6veRMRKdV1beMcualdA0MN+QBuTenJsqQiFVLRiA3jEeiwshjAsynYKSKjZO5vP80+jxawFLX2V2C3Ve9JY/a0g2HVio61Hx+daGBBVIzEJFlkSVo31X2LptGALEk/a5bVOw2A0OX4kjEgjv8ADsNTaiRZRbp5bDbao+GyRUj4QllKFSpUmOxUljp2S4HeI2ttYdKRRNnM4xcscTSxhG0rqCtcmRttMaWOxbkDvuRtRDmDNimhCjQqFtdzdnVwrADlpF7X8QfDfrHZZxChEssWi+kQmIDfa9mRtwNh7T41xBksSTCdbhgpWwWEA6t2Jsl9RO979TTaje0T9cMDi1ZowYW0x9yTf0Mct372/wC0ttb1b9bU5luYTTqdJjUosessrkF5IkmsqhwQoWRdyTc32qSmVqOPaST051P+z2OhY+53du6ije/KucPk6x2KSSKdCoxBj74QaULgrbUBtqABsB4VNwbqpu0UtwPRRkrKLOsj3nhlEBjVgw1BmvY2vy23qdnOciCONpFQE6WkV2XuRgrxSv2iuoWHWxp2TIoWa51FeG0RQ6SpV2DMSSNRYsAdWq96egy7SGBlkfVGIyZOETpUMByQXPePO96XiipRcXm5SYoxWNQU0tKkpWQPa5Eq9xOdrG5v5EU9isTN9JWBDGFaF5LujsQY3jW2zjY8T8KSDJVWMRGWVo7KpWRkIYKAAGOm/IAbEXtv1p/EZeHmE4kkRlRoxo4dtLsrNsyne6Lv5VGyd1W2eS8REbhp3p0kJWRxqg0EFLMuzBwbHlUzLcdM87RPw7LDDLeNXBJlMgI7zHYcPw+t5buHJ01I6u6GPXbTwzcykGRn1qdTEjnXIyYamcTTBnjWNiDDcqmvTzTY+kblbn5CpuCpOYzEzCeKJCgDrISXR2IMenlZ12Or8KgLmMzzxxNpUrM8cmniaWKxCVWUhhsVYDS1wCethVnicvDyJIJHRo1ZV0cO1n03uGU790U3+p01I4eRSjM9wUJd3GlmcspubbdANrchURMExLjD5yrYtsNdbaToIYFi8ZHGVl+rbWlvHS/hUvKcS8kKu6hWJa4W9hpdlHPyAphspUpCnEk9C4dW9HqLAEHUdO9wzXsBe5vU7DxaFC3JtfdrX3JPQAdfComuExZ0UtIKWoSbpKWkoCkNLSGgKKKKBKj47EcOJ5LX0qSBy1HoL+ZsPfUioeaws8Lqou1tSjxZCGUe8qB76BuPArHHd3I5vM4JQu1t2ZgbgC2wvsAB0qoxeNxC5exLMsojkk1EWdYwzcMsOjldI/i6irHN3V4FnWWRUGmS8QhJYG2kkSqRte9ue3iBUPFx4SaMwyYkOzjSZCuH4uk3sosgA69PGueeOU3Tb0+ppYdvfMeYmq8Vf4rfnfiFhi14bpiBtcpHL+8rkKhPmrMu/gWHsi9pk1cFTiZMOhdy8kUiRmyxsQCzAi17dKk5hGBHHAObuiiwA7qMJHNgLABVPvI8afxCwvKiOqs6gyRhxe31SyX6i49moeNdcZYso9lXkeERQ80OOmxndICyTwSx6uYsUUANtbc9ahZ/BicPAmITEzPOJIwY2IMUxkcK0YiAsosTYjcBdyeddSwJHmvGjsiLhnOLKDu+sDFqA5vYOfGwqX2qwERw0uIBdZEUyRyJJJqRwtl0C9gDsNIFjflvXTmHPiXGeZuI8dh8NJJwoZI5G16imuVSoSPifVFiTsQSdO/ikWNnjOOMeqaKGMPDrJYmYI7SRB+bgEJzuQWIv0EKGF8ZJFhMcgIXCRzyIQBxJ2OlySNxotuFIF39lQis2WtjEw7NJBHhePGkpLiGUswCg89NlLW8B76mo8co7p88JaZrxMDFicPiGkxDNENIYsHkZl4kbQ8lAUtyA0gXvtep+NzYfrIYSWQxIYQ8dmMfFkLEMNYse6ALKCL3PPaqjPuy8UOGOOwzvHikTWJo2/bs29mQd06ybAADmBy2qe+CTH4mWDGICsEcJWPdSXmjLPJqWzbG6De11PW1Pp8o+rxySbNMTDhMdKhMohZvozyd7UoVdVz9dUYtv10nc2vTkmNBTCy4TENM0ksasC5cSRE+nLpyjKrc3AWxAHWxqUfEYFMZBHKzwxth0heXS5g47aZBc7MEVlNjsNvE09n3ZmPBquLwJeKcSRppViVn1yKpV0NwSb32ty94VH+/suVomaq+YT4SaQx6FjMKB2i4gZNTuGBBYg7WvYaTtzqf2YnleFjIxYCWRYnYWZ4VYiNj47cm+sAD1qobKocxmxQxSauBLwIlBKlF0RycTUtiSxba+1hy53ldi45oxiIJJGljhmMcMkm7FAqkqW+tpJtfxBHS1VmIpaJm2kooorm6FFKKQUooFpRSUooFFLSCloG6SiigKQ0tFAlFFFAlJRRQVmLyw2YRkaXOponZ1UtcElHXeO5FyLEE32BJJifqpu8BAo1MGbXiZipIZmuAFvzdjbb8BRRU3KKWmFwZVjI7a5CNJa1lVb30otzpF7X3JNhcmwsmPy2CfTxY1fQSVJ5qTsdLDcXooqEnMPg4o04aIqqb3VVABJ5k+JPUmm8NlkMYARLKvqqSxVLctCE2X3AUUVNlHMTg45CpdQSvqsLh1vz0uLFb+RrqHDogKqoAO7dSxOxLE7sfM0tFQGIMsgS2mMAKbqve0IfFEJ0p7gK7xGBidg7L31BAdSyuAeYDqQbbcr2ooqblFO1wsYQxhF0G91sCp1etqHW/W/Om4MviQgqvq+rcs2gcu4GJ0e61FFRaaLLl8TPxCtntpLoWRio5KzKQWXc7Hben4olVQqgKo2AUAAewCiig7ooooFFKKWigKUUUUCiloooP/9k=",
		"https://reparacionesyconstrucciones.com/servicios/plomeria/destape-de-lavaplatos.jpg",
		"https://scontent.fbog3-1.fna.fbcdn.net/v/t1.0-9/20663887_244867296021514_4752437349608031597_n.jpg?_nc_cat=110&ccb=3&_nc_sid=e3f864&_nc_ohc=eXWE_GlTQUMAX907Y-B&_nc_ht=scontent.fbog3-1.fna&oh=e788ddd9c9b80e1752400a3bfdcae6c5&oe=60634157",
		"https://i2.wp.com/marketplacecolombiadigital.com/wp-content/uploads/2020/09/Carpinteria.jpg?fit=540%2C540&ssl=1",
		"https://pbs.twimg.com/profile_images/819190469016092672/K_b2ORat_400x400.jpg",
		"https://conexioncapital.co/wp-content/uploads/2019/10/WhatsApp-Image-2019-10-19-at-7.40.08-PM.jpeg",
		"https://www.colsubsidio.com/uploads/2020/06/Logofamisanar_acf_cropped-1.jpg",
		"https://pbs.twimg.com/media/DXKTzstW4AUVZyK.jpg",
	]);	
	function handleClick() {
		history.push("/producto", {servicio: "data"});
	}
	return(
		<div>
          <h1> Consulta aquí nuestra oferta de servicios:</h1>
		  <Container className={useStyles().sampleGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.view}>
                <CardMedia
                  className={classes.sampleMedia}	
                  image={imgArray[card - 1]}
                  title="Title"
                />
                <CardContent className={classes.sampleContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {namesArray[card - 1]}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={handleClick}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
	  <Footer />
        </div>
		
	);
}
export default Setup;
