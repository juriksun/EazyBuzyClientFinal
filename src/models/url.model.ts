export class Url{
    private static herokuUrl: string = "https://eazy-buzy-server.herokuapp.com/";
    private static localUrl: string = "http://loclhost:3000/";

    static getUrl(): string{
        return (true)?this.localUrl:this.herokuUrl;
    }
}