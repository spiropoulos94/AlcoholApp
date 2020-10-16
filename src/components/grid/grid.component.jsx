import React from 'react';
import "./grid.styles.scss";
import Button from "../button/button.component";
import GridItem from "../grid-item/grid-item.component";

const Grid = () => {
    return (
        <div className="grid">
            {/*<Button>Method 1</Button>*/}
            {/*<Button>Method 2</Button>*/}
            {/*<Button>Method 3</Button>*/}
            <GridItem icon="https://www.flaticon.com/svg/static/icons/svg/56/56936.svg" title='Search by Name'/>
            <GridItem icon="https://www.flaticon.com/svg/static/icons/svg/1241/1241500.svg" title='Search by Ingredients' />
            <GridItem icon="https://www.flaticon.com/svg/static/icons/svg/2776/2776157.svg" title="I feel lucky" />
        </div>
    );
};

export default Grid;
