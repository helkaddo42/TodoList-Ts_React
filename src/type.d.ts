// .d.ts -> permet d'en faire un fichier de declaration de type.
// cela nous permet de ne plus avoir beosoin d'exporter nos type et de les importer dans les fichiers.
// car mtn ils sont directement liees.

type Todo = {
    text: string;
    complete: boolean;
}

type ToogleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;