/**
 * Created by Алексей on 20.03.2018.
 */

import React from 'react';

const QuestionField = (props) => (
    <div>
        <textarea required placeholder={props.placeholder || ""} />
    </div>
);

export default QuestionField;
