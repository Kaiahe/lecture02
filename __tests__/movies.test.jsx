import * as React from "react";
import {ListMovies} from "../movieApplication";
import {render} from "react-dom";

describe("movie pages", () =>{

    it("shows movies list", () => {
        const element = document.createElement("div");
        render(<ListMovies/>, element);
        expect(element.innerHTML).toMatchSnapshot();
    });

    it("lets the user add a new movie", () => {

    });
});