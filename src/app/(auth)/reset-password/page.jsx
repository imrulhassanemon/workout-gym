import React, { Suspense } from 'react';
import ResetPasswordForm from './reset-password-form';

const ResetPassword = () => {
    return (
        <div>
            <h2>Reset Password</h2>
            <Suspense fallback='loading...'>
                <ResetPasswordForm/>
            </Suspense>
        </div>
    );
};

export default ResetPassword;