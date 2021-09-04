import { Component, OnInit } from '@angular/core';
import { MonacoEditorLoaderService, MonacoEditorComponent } from '@materia-ui/ngx-monaco-editor';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

type EditorOptions = monaco.editor.IStandaloneEditorConstructionOptions;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  editorOptions: EditorOptions = {
    theme: 'vs-dark', 
    language: 'javascript',
    fixedOverflowWidgets: true,
    suggest: {
      // Important to hide the "Document Icon" that appears on suggestions
      showFiles: false
    }
  };
  code: string = '';
  originalCode: string = 'function x() { // TODO }';

  constructor(
    private editorService: MonacoEditorLoaderService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.setSampleText();
    this.editorService.isMonacoLoaded$.pipe(filter((v => v))).subscribe(() => {

    });
  }

  onEditorInit(editor: monaco.editor.IStandaloneCodeEditor){
    console.log("Code Editor Instance obtained!");
    // editor

    // const fileContents = fs.readFileSync(`${__dirname}/test-lib.ts`).toString();

    // console.log("Loading file...", fileContents);
    // monaco.languages.typescript.typescriptDefaults.addExtraLib(fileContents);

    const fileUrl = 'http://localhost:4200/assets/game-lib.js';
    this.http.get(fileUrl, {
      responseType: "text"
    }).subscribe(r => {
      // monaco.languages.typescript.typescriptDefaults.addExtraLib(r);
      
      monaco.languages.typescript.javascriptDefaults.addExtraLib(r);
      console.log("Monaco External Library Loaded!");
    });
  }

  private setSampleText(){
    const text = `class MyClass{

    constructor(){

    }

    helloWorld(num: number){
        console.log('Hello World');
    }
}

let obj: MyClass = new MyClass();

// this is an error
obj.helloWorld('0');

// this is ok
obj.helloWorld(0);

// Because the editor is set to Typescript! :D
`;

    this.code = text;
  }

}
