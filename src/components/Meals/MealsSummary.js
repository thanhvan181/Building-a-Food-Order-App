import React from 'react';
import classes from './MealsSummary.module.css'

const MealsSummary = (props) => {
    return (
        <section className={classes.summary}>
            <h2>Đồ ăn ngon, được giao cho bạn</h2>
            <p>
            Chọn bữa ăn yêu thích của bạn từ nhiều lựa chọn các bữa ăn sẵn có của chúng tôi và thưởng thức bữa trưa hoặc bữa tối ngon miệng tại nhà.</p>
            <p>
            Tất cả các bữa ăn của chúng tôi đều được nấu bằng những nguyên liệu chất lượng cao, đúng lúc và tất nhiên bởi những đầu bếp giàu kinh nghiệm!
            </p>
        </section>
    )
}

export default MealsSummary
