<!-- .slide: data-state="contrasted" -->

## **Standard streams** containers

@@@

## *Interop* exchange format

There are already plenty of tools. *Language agnostic*.

```bash
echo something | docker run -i <container>
```

~~~~

```bash
echo 'http://www3.ebu.ch/news/2015/09/media-companies-get-personal-at'  | docker run -i freebird/feature-processor-render-html
```

@@@

## Infinite combinations

```bash
echo something | docker run -i <container> | awk '{print $n}' | docker run -i <other-container>
```

~~~~

```bash
echo 'http://www3.ebu.ch/news/2015/09/media-companies-get-personal-at'  | docker run -i freebird/feature-processor-render-html  | jq -r '."http://freebird.prototyping.bbc.co.uk/ns#html"' | docker run -i freebird/feature-processor-item-body | jq -r '."http://schema.org/text"'
```
