from bs4 import BeautifulSoup
import pandas as pd
import urllib
import os
import re
import copy
os.chdir('/home/helios/Documents/nodeFiles/fight-card-/scraping')

# Open the main page with events listed
sock = urllib.urlopen('http://www.ufc.com/schedule')
page = sock.read()
soup = BeautifulSoup(page)

# Scrape event URLs from the main page
event = {'url': 'foo', 'date': 'bar', 'time': 'baz', 'location': 'buz'}
event_urls = []
div = soup.find(id='event_content')
arrows = div.findChildren('div', {'class' : 'btn-ltgray-arrow'})
dates = div.findChildren('div', {'class' : 'date'})
times = div.findChildren('div', {'class' : 'time'})
locations = div.findChildren('h3', {'class' : 'location'})
aiter = 0
for a in arrows:
    link = a.findChildren('a')
    event_href = link[0].get('href')
    event['url'] = 'http://www.ufc.com' + event_href
    date_strip = re.sub('^[^a-zA-z0-9]*|[^a-zA-Z0-9]*$','', dates[aiter].text)
    time_strip = ''.join(ch for ch in times[aiter].text if ch.isalnum())
    time_restrip = ''.join(time_strip.partition('M')[0:2])
    event['date'] = date_strip
    event['time'] = time_restrip
    event['location'] = locations[aiter].text
    event_urls.append(copy.copy(event))
    print event_urls
    aiter += 1
# Pull Fight URLs from each Event URL
match = {'fighter': 'foo', 'opponent': 'bar', 'weight class' : 'baz', 'event_url' : 'buz'}
matches = []
print matches
iter = 0
for event in event_urls: 
    print event['url']
    try:
        fightmetric = urllib.urlopen('http://www.fightmetric.com/statistics/events/upcoming?page=all')
        fmpage = fightmetric.read()
        fightsoup = BeautifulSoup(fmpage)
        scrape_url = fightsoup.select('.b-link_style_black')
        url_href = scrape_url[iter].get('href')

        event_metric =  urllib.urlopen(url_href)
        metric_html = event_metric.read()
        metric_soup = BeautifulSoup(metric_html)
        trs = metric_soup.find_all('tr')
        tds = metric_soup.find_all('td')
        trIter = 0
        for tr in trs:
            tdIter = 0
            for td in tr:
                if tdIter == 3:
                    anchor = td.findChildren('a')
                    chiter = 0
                    for child in anchor:
                        if chiter == 0:
                            fighter_strip = re.sub('^[^a-zA-z]*|[^a-zA-Z]*$','', child.text)
                            match['fighter'] = fighter_strip
                        elif chiter == 1:
                            opponent_strip = re.sub('^[^a-zA-z]*|[^a-zA-Z]*$','', child.text)
                            match['opponent'] = opponent_strip
                        chiter += 1
                elif tdIter == 13:
                    weightclass = td.findChildren('p')
                    for child in weightclass:
                        weight_strip = re.sub('^[^a-zA-z]*|[^a-zA-Z]*$','', child.text)
                        match['weight class'] = weight_strip
                    match['event_url'] = event['url']
                tdIter += 1
            if trIter < len(trs) - 1:
                matches.append(copy.copy(match))
            trIter += 1

        iter += 1
    
    except IOError:
        pass

# Save fight URLs to a csv file
matches = pd.DataFrame(matches[1:], columns=['fighter', 'opponent', 'weight class', 'event_url'])
matches.to_csv('matches.csv', index=False)
event_urls = pd.DataFrame(event_urls, columns=['date', 'time', 'location'])
print event_urls
event_urls.to_csv('events', index=False)

