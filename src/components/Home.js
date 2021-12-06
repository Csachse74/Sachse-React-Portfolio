import React from "react";
import mountainBike from "./images/MountainBiking.jpg";
const styles = {
    section:{
        display: "flex"
        , justifyContent: "center"
    }
    , image: {
        width: "auto"
        , height: 400
        , flexWrap: "wrap"
        , justifyContent: "flex-end"
        , alignItems: "center"
        , backgroundPosition: "center"
        , backgroundSize: "cover"
    }
    , text: {
        color: "black"
        , fontSize: 25
    }
};
export default function Home() {
    return (
        <section style={styles.section}>
            <img style={styles.image} src={mountainBike} alt="fishing photo"/>
            <div className="m-5">
                <h1 className="text-center" style={{ color: "black"}}> Cameron Sachse </h1>
                <br></br>
                <p className="text-center" style={styles.text}>
                    Junior Software Developer
                </p>
            </div>
        </section>
    );
}