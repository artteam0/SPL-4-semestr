console.log("\n\nEXERCISE 1\n");
abstract class BaseUser {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    abstract getRole() : string;
    abstract getPremissions() : string[];
}

class Guest extends BaseUser {
    getRole(): string {
        return "Guest";
    }
    getPremissions(): string[] {
        return ["Просмотр контента"];
    }
}

class User extends BaseUser {
    getRole(): string {
        return "User";
    }
    getPremissions(): string[] {
        return ["Просмотр контента", "Написание комментариев"];
    }
}

class Admin extends BaseUser {
    getRole(): string {
        return "Admin";
    }
    getPremissions(): string[] {
        return ["Просмотр контента", "Написание комментариев", "Удаление комментариев", "Управление пользователями"];
    }
}

const guest = new Guest(1, "Artsiom");
console.log("\nguest:\n",guest.getPremissions());
const admin = new Admin(2, "Arseniy");
console.log("\nadmin:\n",admin.getPremissions());
const user = new User(3, "Kirill");
console.log("\nuser:\n",user.getPremissions());





console.log("\n\nEXERCISE 2\n");
interface IHTMLReport{
    HTMLReport: string;
}
interface IJSONReport{
    JSONReport: string;
}
abstract class report{
    title: string;
    content: string;
    constructor(title:string, content:string){
        this.title = title;
        this.content = content;
    }
    abstract generate() : string;
}
class HTMLreport extends report implements IHTMLReport{
    HTMLReport: string;
    constructor(title: string, content: string, HTMLReport: string){
        super(title, content);
        this.HTMLReport = HTMLReport;
     }
        
    generate(): string {
        return `<h1>${this.title}</h1><p>${this.content}</p><div>${this.HTMLReport}</div>`;
    } 
}

class JSONreport extends report implements IJSONReport{
    JSONReport: string;
    constructor(title: string, content: string, JSONReport: string){ 
        super(title, content); 
        this.JSONReport = JSONReport;
    }
        
    generate(): string{
        return JSON.stringify({
            title: this.title,
            content: this.content,
            report: this.JSONReport
        });
    }
}   

const htmlReport = new HTMLreport("HTML Report Title", "content content", "<p>content</p>");
console.log(htmlReport.generate());

const jsonReport = new JSONreport("JSON Report Title", "content.", "content");
console.log(jsonReport.generate());




console.log("\n\nEXERCISE 3\n");
class CachE<T> {
    private storage: Map<string, { value: T, expiry: number }> = new Map();
    
    add(key: string, value: T, ttl: number): void {
        const expiry = Date.now() + ttl;
        this.storage.set(key, { value, expiry });
    }
    get(key: string): T | null {
        const entry = this.storage.get(key);
        if(!entry) return null;
        if(Date.now()>entry.expiry){
            this.storage.delete(key);
            return null;
        }
        return entry.value;
    }
    clearExpired():void{
        const now = Date.now();
        this.storage.forEach((entry, key)=> {
            if(entry.expiry<=now){
                this.storage.delete(key);
            }
        })
    }
}

const cache1 = new CachE<number>();
cache1.add("price", 100, 5000);
console.log(cache1.get("price"));




console.log("\n\nEXERCISE 4\n");
function createInstance<T>(cls: new (...args: any[]) => T, ...args: any[]): T { //остаточные параметры, позволяющие передать произвольное число аргументов
    return new cls(...args);
}

class Product {
    constructor(public name: string, public price: number) { }
}

const p = createInstance(Product, "PC", 4000);
console.log(p);




console.log("\n\nEXERCISE 5\n");
enum LogLevel { INFO = "Info", WARNING = "Warning", ERRORS = "Errors" };
type LogEntry = [Date, LogLevel, string];

function logEvent(event: LogEntry) {
    console.log(event);
}

logEvent([new Date(), LogLevel.WARNING, "Start system"]);




console.log("\n\nEXERCISE 6\n");
enum HttpStatus {GOOD = 200, BAD = 400, UNAUTHORIZED = 401, ERROR = 500};

type ApiResponse<T> = [status: HttpStatus, data: T | null, error?:string];

function success<T>(data:T): ApiResponse<T>{
    return[HttpStatus.GOOD, data];
}

function error(message: string, status: HttpStatus): ApiResponse<null>{
    return [status, null, message];
}

const res1 = success({user: "Sofya"});
console.log(res1);

const res2 = error("Doesn`t found", HttpStatus.ERROR);
console.log(res2);


