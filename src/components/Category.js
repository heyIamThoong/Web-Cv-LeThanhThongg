import { useEffect } from "../lib";

const Category = ({ categories, onClick }) => {
    useEffect(() => {
        const btns = document.querySelectorAll(".btn");
        for (const btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                onClick(id);
            });
        }
    });

    return `<div>
        ${categories
            .map(
                (category) =>
                    `<button class="btn" data-id="${category.id}">${category.name}</button>`
            )
            .join("")}
    </div>`;
};

export default Category;
