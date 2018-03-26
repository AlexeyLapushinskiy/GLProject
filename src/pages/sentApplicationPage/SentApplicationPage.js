/**
 * Created by Алексей on 20.03.2018.
 */
import React from 'react';

import FormField from '../../components/formField/FormField';
import QuestionField from '../../components/questionField/QuestionField';
import SendButton from '../../components/sendButton/SendButton';
import Sidebar from '../../components/sidebar/Sidebar';

const SentApplicationPage = () => (
  <div>
    <Sidebar />
    <div>
        <span>Sent application</span>
        <FormField
            placeholder="Theme"
        /><br/>
        <FormField
            type="date"
            placeholder="Date"
        /><br/>
        <FormField
            placeholder="User name"
        /><br/>
        <QuestionField
            placeholder="Question text"
        /><br/>
        <SendButton />
    </div>
  </div>
);

export default SentApplicationPage;
