export default class Account{
    private _name: string;
    private _email: string;
    private _password: string;
    private _license: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get license(): string {
        return this._license;
    }

    set license(value: string) {
        this._license = value;
    }
}