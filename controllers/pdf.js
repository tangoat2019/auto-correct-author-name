import { Request, Response } from "express";
var pdfUtil = require('pdf-to-text');
var pdf_path = "absolute_path/to/pdf_file.pdf";

//option to extract text from page 0 to 10
var option = {from: 0, to: 3};

export const convert = (req: Request, res: Response) => {
    pdfUtil.pdfToText(upload.path, option, (err, data)=> {
        if (err) throw(err);
        console.log(data);

    });
};
