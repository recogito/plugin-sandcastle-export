export const serializeQuill = (obj: any[]) => {
  obj.forEach((anno) => {
    anno.bodies.forEach((body: any) => {
      body.purpose = "commenting";
      if (body.value.ops) {
        let text = "";
        body.value.ops.forEach((op: any) => {
          if (op.insert) {
            text += op.insert;
          } else {
            text += " ";
          }
        });

        body.value = text;
      }
    });
  });
};
