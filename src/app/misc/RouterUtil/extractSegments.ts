import { UrlTree } from '@angular/router';

export function extractSegments(urlTree: UrlTree): string[] {
    return urlTree.root.children.primary.segments.map(x => x.path);
}
