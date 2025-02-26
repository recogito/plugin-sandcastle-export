export const serializeQuill = (objIn: any[]) => {
  let obj: any[] = JSON.parse(JSON.stringify(objIn));
  obj.forEach((anno) => {
    anno.bodies.forEach((body: any) => {
      body.value = JSON.parse(body.value);
      if (body.purpose === "commenting") {
        if (body.value.ops) {
          let text = "";
          body.value.ops.forEach((op: any) => {
            if (op.insert) {
              text += op.insert;
            } else {
              text += " ";
            }
          });

          body.type = "TextualBody";
          body.format = "text/plain";
          body.value = text;
        }
      } else if (body.purpose === "tagging") {
        body.type = "TextualBody";
        if (body.value === typeof Object) {
          body.id = body.value.id;
          body.value = body.value.label;
        }
      }
    });
  });

  return obj;
};
