type Todo ={
    text: string;
    complete: boolean;
};

type toggleTodo = (selectedTodo: Todo) =>  void

type getTodo = (newTodo: string) =>  void
