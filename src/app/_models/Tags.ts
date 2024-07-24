export class Tag{
    private constructor(private readonly key: string, public readonly colour: string){

    }

    static readonly UNITY = new Tag('Unity', 'DarkGrey');
    static readonly ANGULAR = new Tag('Angular', 'Crimson');
    static readonly CSHARP = new Tag('C#', 'MediumPurple');
    static readonly PYTHON = new Tag('Python', 'DodgerBlue');
    static readonly JAVA = new Tag('Java', 'HotPink');
    static readonly SQLITE = new Tag('SQLite', 'LimeGreen');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'Turquoise');
    static readonly HTML = new Tag('HTML', 'DarkOrange');
    static readonly CSS = new Tag('CSS', 'SkyBlue');

    toString(){
        return this.key;
    }
}