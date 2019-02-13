import * as React from 'react';
import './register.css';
import { IForm, IAttendee } from 'src/types';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

interface IProps {
    form?: IForm;
    register: (body: IAttendee) => any;
}

interface IState {
    firstName: string;
    lastName: string;
    emailAddress: string;
    company: string;
    attendWorkshop: boolean;
    submitted: boolean;
}

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#eff1f2',
            main: '#eff1f2'
        },
        secondary: {
            light: '#eff1f2',
            main: '#eff1f2'
        },
        text: {
            primary: '#eff1f2',
        }
    }
});

class Register extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            company: '',
            attendWorkshop: false,
            submitted: false
        }
        this.submitForm = this.submitForm.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    public render() {
        const { form } = this.props;
        return form ?
            (
                <div className="ibm__page-register">
                    <div className="ibm__form-panel">
                        <div className="ibm__form-panel-title">
                            {form.panelTitle}
                        </div>
                        <div className="ibm__form-panel-text">
                            {form.panelParagraphOne}
                        </div>
                        <div className="ibm__form-panel-text">
                            {form.panelParagraphTwo}
                        </div>
                    </div>
                    <div onSubmit={this.submitForm} className="ibm__form">
                        {this.state.submitted ?
                            (<React.Fragment>
                                <div className="ibm__form-title">Thanks for Registering</div>
                                <div className="ibm__form-description">
                                    We look forward to seeing you at the exhibition.
                                    If you registered to attend the workshop, details will come later.
                                </div>
                            </React.Fragment>)
                            :
                            (<React.Fragment>
                                <div className="ibm__form-title">{form.formTitle}</div>
                                <div className="ibm__form-description">{form.formDescription}</div>
                                <MuiThemeProvider theme={theme}>
                                    <TextField
                                        label="First Name"
                                        value={this.state.firstName}
                                        onChange={this.handleChange('firstName')}
                                        margin="normal"
                                        required={true}
                                        fullWidth={true}
                                    />
                                    <TextField
                                        label="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleChange('lastName')}
                                        margin="normal"
                                        required={true}
                                        fullWidth={true}
                                    />
                                    <TextField
                                        label="Email"
                                        value={this.state.emailAddress}
                                        onChange={this.handleChange('emailAddress')}
                                        margin="normal"
                                        type="email"
                                        required={true}
                                        fullWidth={true}
                                    />
                                    <TextField
                                        label="Company"
                                        value={this.state.company}
                                        onChange={this.handleChange('company')}
                                        margin="normal"
                                        required={false}
                                        fullWidth={true}
                                    />
                                    <FormControlLabel
                                        className="ibm__form-checkbox"
                                        control={
                                            <Checkbox
                                                checked={this.state.attendWorkshop}
                                                onChange={this.handleChange('attendWorkshop')}
                                                value={`${this.state.attendWorkshop}`}
                                            />
                                        }
                                        label="Attend Workshop"
                                    />
                                    <div className="ibm__checkbox-text">{form.checkboxText}</div>
                                </MuiThemeProvider>
                                <button className="ibm__secondary-button" onClick={this.submitForm}>
                                    Submit
                        </button>
                            </React.Fragment>)}
                    </div>
                </div>
            )
            :
            <span className="spinner"></span>
    }

    private handleChange = (key: keyof IState) => (event: any) => {
        this.setState({
            [key]: event.target.value
        } as Pick<IState, keyof IState>);
    };

    private submitForm() {
        const { register } = this.props;
        const { firstName, lastName, emailAddress, company, attendWorkshop } = this.state;
        register({ firstName, lastName, emailAddress, company, attendWorkshop });
        this.setState({submitted: true});
        this.clearForm();
    }

    private clearForm() {
        this.setState({
            firstName: '',
            lastName: '',
            emailAddress: '',
            company: '',
            attendWorkshop: false
        })
    }
}

export default Register;
