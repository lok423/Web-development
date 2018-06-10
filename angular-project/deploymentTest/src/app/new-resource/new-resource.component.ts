import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { FormControl, FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var CKEDITOR: any;
@Component({
  selector: 'app-new-resource',
  templateUrl: './new-resource.component.html',
  styleUrls: ['./new-resource.component.css']
})
export class NewResourceComponent implements OnInit {
  publishButtonVal: boolean;
  editorForm: FormGroup;
  @ViewChild('myckeditor') public ckeditor: any;
  public ckConfig: any;
  imageFile: File;
  @ViewChild('resource_image') resource_image: ElementRef;
  mycontent: string;
  data:string;

  constructor(
    private postService: PostServiceService, private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.createForm();
  }

  ngOnInit() {
    this.ckeditor = CKEDITOR.replace('editor1', {
      extraPlugins: "mathjax,smiley,preview,divarea,eqneditor,base64image",
      removePlugins: "about,image",
      mathJaxLib: '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_HTML',
      language: 'en',
      allowedContent: true
    });
    this.ckeditor.on('change', function(ev) {
      this.mycontent = CKEDITOR.instances.editor1.getData();
    });
  }

  saveClick() {
    this.publishButtonVal = false;
    for (const field in this.editorForm.controls) { // 'field' is a string
      if (field != "resource_title") {
        this.editorForm.controls[field].clearValidators();
      }
      this.editorForm.controls[field].updateValueAndValidity();
    }
    this.editorForm.updateValueAndValidity();
  }

  publishClick() {
    this.publishButtonVal = true;

    this.editorForm.controls["resource_subTitle"].setValidators([Validators.required, Validators.minLength(2), Validators.maxLength(40)]);
    this.editorForm.controls["resource_des"].setValidators([Validators.required, Validators.minLength(2), Validators.maxLength(200)]);
    this.editorForm.controls["resource_image"].setValidators([Validators.required]);
    this.editorForm.controls["publish"].setValue(true);

    for (const field in this.editorForm.controls) { // 'field' is a string
      this.editorForm.controls[field].updateValueAndValidity();
    }
    this.editorForm.updateValueAndValidity();
  }

  processForm(value) {
    const Image = this.resource_image.nativeElement;
    const formData: FormData = new FormData();
    if (Image.files && Image.files[0]) {
      this.imageFile = Image.files[0];
      const file: File = this.imageFile;
      var ext = file.name.substring(file.name.lastIndexOf('.') + 1);
      const fileSize = file.size / 1024 / 1024;
      if (ext.toLowerCase() != 'png' && ext.toLowerCase() != 'jpg' && ext.toLowerCase() != 'jpeg' && ext.toLowerCase() != 'bmp') {
        this.editorForm.controls['resource_image'].setErrors({ 'extError': true });
      }
      else if (fileSize > 2.2) {
        this.editorForm.controls['resource_image'].setErrors({ 'sizeError': true });

      }
      //console.log(file);
      formData.append('resource_image', file, file.name);
    }
    this.mycontent = CKEDITOR.instances.editor1.getData();
    const Content = JSON.stringify(this.mycontent);

    formData.append('resource_title', value.resource_title);
    formData.append('resource_subTitle', value.resource_subTitle);
    formData.append('resource_des', value.resource_des);
    formData.append('content', Content);
    formData.append('publish', value.publish);

    if (!this.editorForm.invalid) {
      this.serviceCalls(formData);
      alert("Submitted Success.");
    }
  }

  serviceCalls(ob) {
    this.postService.getDashboardProfile().subscribe(
      res => console.log(res),
      error => console.log(error)
    )
  }

  createForm() {
    this.editorForm = this.fb.group({ // <-- the parent FormGroup
      resource_title: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      resource_subTitle: '',
      resource_image: null,
      resource_des: '',
      content: null,
      publish: false
    });
  }

}
