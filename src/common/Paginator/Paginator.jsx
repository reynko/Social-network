import React from "react";
import classes from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}, ...props) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={classes.Paginator}>
            {pages.map((page, index) => {
                return <span key={index}
                             className={currentPage === page ? classes.selectedPage : undefined}
                             onClick={() => onPageChanged(page)}
                >{page}</span>
            })}
        </div>
    </div>
}
export default Paginator